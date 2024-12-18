import React, { useState, useEffect, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import zoomPlugin from 'chartjs-plugin-zoom';
import data from '../../data/budget.json'; // Importing budget data from local JSON file
import Row from 'react-bootstrap/Row'; // For layout (Bootstrap grid system)
import Col from 'react-bootstrap/Col'; // For layout (Bootstrap grid system)

// Register Chart.js components and the zoom plugin
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  zoomPlugin
);

// Predefined colors for different datasets
const COLORS = [
  'rgba(133, 97, 0, 1)',
  'rgba(129, 69, 1, 1)',
  'rgba(128, 42, 2, 1)',
  'rgba(146, 1, 14, 1)',
  'rgba(128, 0, 55, 1)',
  'rgba(96, 14, 86, 1)',
  'rgba(63, 12, 133, 1)',
  'rgba(0, 60, 156, 1)',
  'rgba(9, 83, 152, 1)',
  'rgba(18, 107, 145, 1)',
];

  const initialState = {};

  // Get the first category from the data
  const firstCategory = "Protective Services";

  
  // Set all categories as unchecked initially, except the first category
  data.forEach(service => {
    initialState[service.category] = service.category === firstCategory;
  });

  // Ensure that the first category's datasets are visible initially
  const firstVisibleDatasets = data
    .filter(service => service.category === firstCategory)
    .map(service => service.service);

const BudgetVis = () => {
  const [chartTitle, setChartTitle] = useState('Gross Operating Expenditures'); // Track the title of the current chart
  const [chartData, setChartData] = useState({ labels: ['2024', '2025', '2026', '2027'], datasets: []}); // Store data to be displayed on the chart
  const [visibleDatasets, setVisibleDatasets] = useState(firstVisibleDatasets); // List of currently visible datasets
  const [categoryChecked, setCategoryChecked] = useState(initialState); // Track which categories are checked (visible)
  const chartRef = useRef(null); // Reference to the Chart.js chart instance (for zoom reset)

  // Use useEffect to ensure the chart data updates after visibleDatasets is set
  useEffect(() => {
    getLine(chartTitle, data);
  }, [chartTitle]);

  // Handle chart updates when a new budget category is selected
  const handleChartChange = (title) => {
    setChartTitle(title); // Update chart title
    // Generate the new data for the selected budget category (but keep current visibility state)
  };
  
  // Generate the line chart data based on the selected budget category
  function getLine(budgetIndex, data) {
    const myChartdata = {
        labels: chartData.labels,
        datasets: [] // Clear previous datasets
    };
    data.forEach((service, index) => {
      let proceed = false;
      let budgetObject = {};

      // Find the relevant budget summary for the selected category
      service.budget.forEach((element) => {
        if (element['Budget Summary'] === budgetIndex) {
          proceed = true;
          budgetObject = element;
        }
      });
  
      if (proceed) {
        const indivObject = {
          label: service['service'],
          data: [
            parseBudgetValue(budgetObject['2024']),
            parseBudgetValue(budgetObject['2025']),
            parseBudgetValue(budgetObject['2026']),
            parseBudgetValue(budgetObject['2027']),
          ],
          borderColor: COLORS[index % COLORS.length],
          fill: false,
          tension: 0.1,
          hidden: !visibleDatasets.includes(service['service']), // Keep current visibility state
        };
        myChartdata.datasets.push(indivObject);
      }
    });
  
    setChartData(myChartdata); // Only update the chart data (keep visibility the same)
  }
  
  

   // Toggle visibility for entire categories (and update the checked state)
   const toggleCategory = (category) => {
    // Get all services in the selected category
    const categoryLines = data
      .filter(service => service.category === category)
      .map(service => service['service']);
  
    // Check if all services in the category are visible
    const allVisible = categoryLines.every(line => visibleDatasets.includes(line));
  
    // Toggle visibility for all services in the category
    const newVisibleDatasets = allVisible
      ? visibleDatasets.filter(label => !categoryLines.includes(label)) // Hide all if currently visible
      : [...visibleDatasets, ...categoryLines.filter(line => !visibleDatasets.includes(line))]; // Show all if hidden
  
    setVisibleDatasets(newVisibleDatasets); // Update visibility state
    updateChartVisibility(newVisibleDatasets); // Update chart to reflect changes
  
    // Toggle the checked state of the category
    setCategoryChecked(prevState => ({
      ...prevState,
      [category]: !allVisible, // Set the category checkbox to checked/unchecked
    }));

    resetZoom(); 
  };

  // Update chart visibility when datasets are toggled (shown or hidden)
  function updateChartVisibility(newVisibleDatasets) {
    const updatedChartData = {
      ...chartData,
      datasets: chartData.datasets.map(dataset => ({
        ...dataset,
        hidden: !newVisibleDatasets.includes(dataset.label), // Hide datasets not in the visible list
      })),
    };
  
    setChartData(updatedChartData); // Update the chart with the new visibility states
  }

  // Clean and parse budget values (removing $ signs, commas, and handling N/A)
  function parseBudgetValue(value) {
    if (value === 'N/A' || value === '-$0') return null;
    if (typeof value === 'string') {
      value = value.replace(/[\$,]/g, '').trim(); // Remove dollar signs and commas
      return parseFloat(value); // Convert to a float
    }
    return value;
  }

  // Toggle visibility for individual datasets (services)
  const toggleDatasetVisibility = (label) => {
    const newVisibleDatasets = visibleDatasets.includes(label)
      ? visibleDatasets.filter((item) => item !== label) // Hide if already visible
      : [...visibleDatasets, label]; // Show if hidden

    setVisibleDatasets(newVisibleDatasets); // Update the state
    updateChartVisibility(newVisibleDatasets); // Update chart to reflect visibility changes
    resetZoom(); 
  };

 

  // Custom Chart.js plugin to draw labels at the end of each visible line
  const endLabelPlugin = {
    id: 'endLabel',
    afterDatasetDraw(chart) {
      const { ctx } = chart;
  
      chart.data.datasets.forEach((dataset, i) => {
          if (!dataset.hidden) {
              const meta = chart.getDatasetMeta(i);
              const lastPoint = meta.data[meta.data.length - 1];
  
              if (lastPoint) {
                  ctx.save(); // Save state
  
                  // Draw the label
                  ctx.font = '12px Arial';
                  ctx.fillStyle = dataset.borderColor;
                  ctx.fillText(dataset.label, lastPoint.x + 10, lastPoint.y);
  
                  ctx.restore(); // Restore to original state
              }
          }
      });
  }
  };
  // Chart options including tooltips, hover, and zoom functionality
  const options = {
    maintainAspectRatio: false,
    responsive: true,
    layout: { padding: { right: 150 } }, // Add padding to the right for the label space
    plugins: {
      legend: { display: false }, // Hide default legend
      tooltip: {
        enabled: true,
        mode: 'nearest',
        intersect: false,
        callbacks: {
          title: (tooltipItems) => `Year: ${tooltipItems[0].label}`, // Show the year in the tooltip
          label: (tooltipItem) => {
            const datasetLabel = tooltipItem.dataset.label || '';
            const value = tooltipItem.raw;
  
            // Format the value with commas using toLocaleString
            const formattedValue = value.toLocaleString();
  
            return `${datasetLabel}: $${formattedValue}`; // Show the dataset label and formatted value
          },
        },
      },
      zoom: {
        pan: { enabled: true }, // Enable panning
        zoom: { enabled: true, mode: 'y', wheel: { enabled: true } } // Enable zoom on the Y-axis
      },
      hover: {
        mode: 'dataset', // Highlight the entire dataset line on hover
        onHover: (event, chartElement) => {
          event.native.target.style.cursor = chartElement.length ? 'pointer' : 'default'; // Change cursor on hover
        },
      },
    },
  };

  // Reset zoom function (uses the ref to the chart instance)
  const resetZoom = () => {
    if (chartRef.current) {
      chartRef.current.resetZoom(); // Resets the zoom level on the chart
    }
  };

  const chartDescriptions={
    "Gross Operating Expenditures": "This value is the total amount spent for the service",
    "Other Revenues":"This value is the total revenue that is brought in by a method other than taxation",
    "Net Tax Levy Supported Operating Budget":"This is the amount of tax money spent on the service",
    "Total Capital Expenditures":"This is the amount spent on (tangible) capital items. These are items like property, plant, and equipment which are typically high dollar value and their use spans over several years. They are 'capitalized' instead of the whole cost being expensed in one year, and their cost is amortized in a systematic way across their expected useful life.",
    "Full-Time Equivalents":"Measures how many total full-time employees or part-time employees add up to full-time employees a company employs"

  }

  return (
    <>
      <Row>
        <Col xs={12} md={4}>
        <h3>Graphs</h3>
        <ul className="budget-list">
            <li onClick={() => handleChartChange('Gross Operating Expenditures')} className="m-2 h6">Gross Operating Expenditures</li>
            <li onClick={() => handleChartChange('Other Revenues')} className="m-2 h6">Other Revenues</li>
            <li onClick={() => handleChartChange('Net Tax Levy Supported Operating Budget')} className="m-2 h6">Net Levy-Supported Operating</li>
            <li onClick={() => handleChartChange('Total Capital Expenditures')} className="m-2 h6">Total Capital Expenditures</li>
            <li onClick={() => handleChartChange('Full-Time Equivalents')} className="m-2 h6">Full-Time Equivalents</li>
          </ul>
          <hr/>
          <h3>Services</h3>
          <ul className="cat-list">
            {Object.keys(categoryChecked).map(cat => (
              <li key={cat}>
                <label className="cat-label m-2 h6">
                  <input
                    type="checkbox"
                    checked={categoryChecked[cat]} // Check/uncheck the category
                    onChange={() => toggleCategory(cat)} // Toggle the entire category
                  /> <span className="cat-listing">{cat}</span>
                </label>
                {categoryChecked[cat] && (<ul>
                  {data.filter(service => service.category === cat).map(service => (
                    <li key={service.service}>
                      <label className="item-label m-1">
                        <input
                          type="checkbox"
                          checked={visibleDatasets.includes(service.service)} // Check/uncheck the service
                          onChange={() => toggleDatasetVisibility(service.service)} // Toggle visibility of individual service
                        />
                        {service.service}
                      </label>
                    </li>
                  ))}
                </ul>)}
              </li>
            ))}
          </ul>
        </Col>
        <Col xs={12} md={8}>
          <h2>{chartTitle}</h2>
          <p>{chartDescriptions[chartTitle]}</p>          
          <div className="graph">
            {chartData.datasets && chartData.datasets.length > 0 ? (
              <Line ref={chartRef} data={chartData} options={options} plugins={[endLabelPlugin]} />
            ) : (
              <p>Loading chart...</p> // Display this until the chartData is available
            )}
          </div>
          <button className="btn btn-primary" onClick={resetZoom}>Reset Zoom</button>
        </Col>
      </Row>
    </>
  );
  
};

export default BudgetVis;

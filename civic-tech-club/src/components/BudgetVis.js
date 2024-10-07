import React, { useState, useEffect, useRef } from 'react';
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
import { Line } from 'react-chartjs-2';
import zoomPlugin from 'chartjs-plugin-zoom'; // Import the zoom plugin
import data from '../data/budget.json';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Register the required Chart.js components and the zoom plugin
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  zoomPlugin // Register the zoom plugin here
);

// Helper to generate unique colors
const COLORS = [
  'rgba(75, 192, 192, 1)',
  'rgba(255, 99, 132, 1)',
  'rgba(54, 162, 235, 1)',
  'rgba(255, 206, 86, 1)',
  'rgba(153, 102, 255, 1)',
  'rgba(255, 159, 64, 1)',
];

const BudgetVis = () => {
  const [chartTitle, setChartTitle] = useState('');
  const [chartData, setChartData] = useState({ labels: [], datasets: [] });
  const chartRef = useRef(null); // Create a ref for the chart

  useEffect(() => {
    // This code will run once when the component loads
    handleChartChange('Gross Operating Expenditures');
  }, []); // The empty array makes it run only once, when the component mounts

  const handleChartChange = (title) => {
    setChartTitle(title); // Set chart title for debugging or displaying
    const newChartData = getLine(title, data); // Pass title directly to getLine function
    setChartData(newChartData); // Update chart data with the new dataset
    resetZoom();
  };

  // Generate the line chart data with custom colors
  function getLine(budgetIndex, data) {
    const chartdata = {
      labels: ['2024', '2025', '2026', '2027'], // Preset labels for the X-axis (years)
      datasets: [],
    };

    data.forEach((service, index) => {
      let proceed = false;
      let budgetObject = {};

      service.budget.forEach((element) => {
        if (element['Budget Summary'] === budgetIndex) {
          proceed = true;
          budgetObject = element;
        }
      });

      if (proceed) {
        // Create a dataset for each service
        const indivObject = {
          label: service['service'], // Dataset label
          data: [
            parseBudgetValue(budgetObject['2024']),
            parseBudgetValue(budgetObject['2025']),
            parseBudgetValue(budgetObject['2026']),
            parseBudgetValue(budgetObject['2027']),
          ],
          borderColor: COLORS[index % COLORS.length], // Assign a unique color
          fill: false, // No fill for line chart
          tension: 0.1, // Smooth the line
        };
        chartdata.datasets.push(indivObject);
      }
    });

    return chartdata;
  }

  // Helper function to clean up budget values
  function parseBudgetValue(value) {
    if (value === 'N/A' || value === '-$0') return null;
    if (typeof value === 'string') {
      value = value.replace(/[\$,]/g, '').trim(); // Remove dollar signs, commas, and spaces
      return parseFloat(value);
    }
    return value;
  }

  // Custom plugin to place labels at the end of each line
  const endLabelPlugin = {
    id: 'endLabel',
    afterDatasetDraw(chart, args, options) {
      const { ctx } = chart;
      chart.data.datasets.forEach((dataset, i) => {
        const meta = chart.getDatasetMeta(i);
        const lastPoint = meta.data[meta.data.length - 1]; // Get last point of each line
        const x = lastPoint.x +10; // Offset label a bit to the right of the point
        const y = lastPoint.y;

        ctx.save();
        ctx.font = '12px Arial';
        ctx.fillStyle = dataset.borderColor;
        ctx.fillText(dataset.label, x, y); // Draw label
        ctx.restore();
      });
    },
  };

  // Zoom options to enable only box zoom
  const options = {
    maintainAspectRatio: false, // This allows the chart to resize without keeping a fixed aspect ratio
    responsive: true,
    layout: {
        padding: {
          right: 100, // Add 20px padding to the right (total 40px reduction in width)
        },
      },
    plugins: {
      legend: { display: false },
      zoom: {
        pan: {
          enabled: true,  // Disable panning entirely
        },

        zoom: {
            enabled:true,
            drag:{
                enabled:false,
                mode: 'y'
            },
          mode: 'y', // Box zoom only on the Y-axis
          wheel: {
            enabled: true, // Disable zooming with the mouse wheel
          },
        },
      },
      tooltip: {
        enabled: true,
        mode: 'nearest', // Tooltip appears when hovering near a point
        intersect: false,
        callbacks: {
          title: (tooltipItems) => {
            // Title will display the year (X-axis label)
            return `Year: ${tooltipItems[0].label}`;
          },
          label: (tooltipItem) => {
            // Label will display dataset label and value
            const datasetLabel = tooltipItem.dataset.label || '';
            const value = tooltipItem.raw; // Get the value at the hovered point
            return `${datasetLabel}: $${value}`;
          },
        },
      },

    hover: {
      mode: 'dataset', // Highlight the entire line when hovering
      onHover: function (event, chartElement) {
        if (chartElement.length) {
          event.native.target.style.cursor = 'pointer'; // Change cursor to pointer
        } else {
          event.native.target.style.cursor = 'default';
        }
      },
    },
    datasets: {
      line: {
        hoverBorderWidth: 5,  // Highlight the line on hover
        hoverBorderColor: 'rgba(255,99,132,1)',  // Change border color on hover
      },
    },
    },
  };

  // Function to reset zoom
  const resetZoom = () => {
    if (chartRef.current) {
      chartRef.current.resetZoom();
    }
  };


  return (
    <>
      <Row>
        <Col xs={12} md={3}>
          <ul class="budget-list">
            <li onClick={() => handleChartChange('Gross Operating Expenditures')}>Gross Operating Expenditures</li>
            <li onClick={() => handleChartChange('Other Revenues')}>Other Revenues</li>
            <li onClick={() => handleChartChange('Net Tax Levy Supported Operating Budget')}>Net Levy-Supported Operating</li>
            <li onClick={() => handleChartChange('Total Capital Expenditures')}>Total Capital Expenditures</li>
            <li onClick={() => handleChartChange('Full-Time Equivalents')}>Full-Time Equivalents</li>
          </ul>
        </Col>
        <Col xs={12} md={9} >
         <h2>{chartTitle}</h2>
         <div className="graph">
            <Line ref={chartRef} data={chartData} options={options} plugins={[endLabelPlugin]} />
         </div>
          <button className="btn btn-primary" onClick={resetZoom}>Reset Zoom</button> {/* Reset zoom button */}
        </Col>
      </Row>

    </>
  );
};

export default BudgetVis;

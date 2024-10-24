import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';  // Your existing Home component
import LondonBudget from './pages/Budgets/LondonBudget'; // The new About component
import PDCalendar from './pages/PDCalendar/PDCalendar';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/london-budget" element={<LondonBudget />} />
        <Route path="/pd-calendar" element={<PDCalendar />} />

      </Routes>
    </Router>
  );
}

export default App;


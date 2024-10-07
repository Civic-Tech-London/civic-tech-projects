
import './App.css';
import SiteNav from './components/SiteNav';
import Hero from './components/Hero';
import HoldProjects from './components/HoldProjects';
import HoldProfiles from './components/HoldProfiles';

function App() {
  return (
    <div className="App">
      <SiteNav/>
      <Hero/>
      <HoldProjects/>
      <HoldProfiles/>
    </div>
  );
}

export default App;

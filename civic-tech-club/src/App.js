
import './App.css';
import SiteNav from './components/SiteNav';
import Hero from './components/Hero';
import HoldProjects from './components/HoldProjects';
import HoldProfiles from './components/HoldProfiles';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <SiteNav/>
      <Hero/>
      <HoldProjects/>
      <HoldProfiles/>
      <Footer/>
    </div>
  );
}

export default App;

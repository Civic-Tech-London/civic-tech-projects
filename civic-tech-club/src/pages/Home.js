
import React from 'react';
import SiteNav from '../components/SiteNav';
import Hero from '../components/Hero';
import HoldProjects from '../components/HoldProjects';
import HoldProfiles from '../components/HoldProfiles';
import Footer from '../components/Footer';



function Home() {
 

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

export default Home;
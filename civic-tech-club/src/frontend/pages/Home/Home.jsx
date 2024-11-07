
import React from 'react';
import SiteNav from '../../components/SiteNav';
import Hero from './Hero';
import HoldProjects from './HoldProjects';
import HoldProfiles from './HoldProfiles';
import Footer from '../../components/Footer';

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
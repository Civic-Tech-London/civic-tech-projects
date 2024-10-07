
import React from 'react';
import SiteNav from '../components/SiteNav';
import Footer from '../components/Footer';
import PDCalContent from '../components/PDCalContent';

function PDCalendar() {
  return (
    <div className="App">
      <SiteNav/>
      <PDCalContent/>
      <Footer/>
    </div>
  );
}

export default PDCalendar;
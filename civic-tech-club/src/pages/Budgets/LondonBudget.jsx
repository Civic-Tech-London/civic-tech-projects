
import React from 'react';
import SiteNav from '../../components/SiteNav';
import Footer from '../../components/Footer';
import BudgetContent from './BudgetContent';

function Home() {
  return (
    <div className="App">
      <SiteNav/>
      <BudgetContent/>
      <Footer/>
    </div>
  );
}

export default Home;
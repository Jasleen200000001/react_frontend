import React from 'react';
import Navbar from './components/navbar';
import LandingPage from './components/LandingPage';
import Marquee from './components/marquee';
import About from './components/about';
import Eyes from './components/eyes';
import Featured from './components/featured';
import Cards from './components/cards';
import Ready from './components/ready';
import Footer from './components/footer';
import LocomotiveScroll from 'locomotive-scroll';

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (

    <div className="main w-full h-screen bg-cu-light-gray">
      <Navbar />
      <LandingPage />
      <Marquee />
      <About/>
      <Eyes />
      <Featured/>
      <Cards/>
      <Ready/>
     <Footer />
    </div>
  );
}

export default App;

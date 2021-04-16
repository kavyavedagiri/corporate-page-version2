import React from 'react';
import './App.css';
import Home from './components/pages/HomePage/Home';
import Pricing from './components/pages/Pricing/Pricing';
import Features from './components/pages/Features/Features';


import Navbar from './components/Navbar';
import ContactUs from './components/pages/Footer.js/Footer';
import Testimonial from './components/Testimonials/TestimonialSection'
import VedioSection from './components/VedioSection';
function App() {
  return (
  <>
      <Navbar />
      <VedioSection/>
    
        <Home/>
        <Pricing />
        <Features/>
       
      <Testimonial/>
      <ContactUs />
    </>
  );
}

export default App;
import React from 'react';
import './App.css';
import Home from './components/pages/HomePage/Home';
import Pricing from './components/pages/Pricing/Pricing';
import Features from './components/pages/Features/Features';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import ContactUs from './components/pages/Footer.js/Footer';
import Testimonial from './components/Testimonials/TestimonialSection'
import VedioSection from './components/VedioSection';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
  <>
  <Router>
    <ScrollToTop/>
       <Navbar />
       <VedioSection/>

      <Switch>
        <Route path='/' exact component={Home} />
      </Switch>
        <Home/>
        <Features/>
        <Testimonial/>
        <Pricing />
        <ContactUs />
     
  </Router>
    </>
  );
}

export default App;
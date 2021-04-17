import React from 'react';
import '../../Pricing.css';

import {card1,card2,card3,card4,card5 } from './Data';
import Pricing from '../../Pricing';

function Services() {
  return (
    <>
 <div
    id="pricingPg"
        className='home__mainf-section'> 
        
        <div className='container'>
        <div class="headingf">Pricing</div>
          <div className='rowf home__mainf-colf'
            style={{
              display: 'flex',
              flexDirection: 'colf'}}>
        {/* <h1 className='pricing__heading'>Pricing</h1> */}
        <Pricing {...card1} /> 
        <Pricing {...card2} /> 
        <Pricing {...card3} /> 
        <Pricing {...card4} /> 
        <Pricing {...card5} /> 
        </div>
      </div>
        </div>
    </>
  );
}

export default Services;
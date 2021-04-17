import React from 'react';



import FeatureSection from '../../FeatureSection';
import {feature1} from './Data';
import '../../FeaturesSection.css'



export default function Features() {
 
  return (
    <div
    id="featurePg"
        className='home__mainf-section'> 
        
        <div className='container'>
        <div class="headingf">Features</div>
          <div className='rowf home__mainf-colf'
            style={{
              display: 'flex',
              flexDirection: 'colf'}}>
    <FeatureSection {...feature1}/>
    <FeatureSection {...feature1}/>
    <FeatureSection {...feature1}/>
    <FeatureSection {...feature1}/>
    <FeatureSection {...feature1}/>
    <FeatureSection {...feature1}/>
      {/* f1 end */}
     
  
      
    </div>
    </div>
    </div>
  );
}
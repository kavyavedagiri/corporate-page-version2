import React from 'react';
import MainSection from '../../MainSection';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import Pricing from '../../Pricing';

function Home() {
  return (
    <div id="homePg">
      <MainSection {...homeObjOne} />
      <MainSection {...homeObjThree} />
      <MainSection {...homeObjTwo} />
      <MainSection {...homeObjFour} />
    </div>
  );
}

export default Home;
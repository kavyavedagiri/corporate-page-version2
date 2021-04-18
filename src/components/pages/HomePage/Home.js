import React from 'react';
import MainSection from '../../MainSection';
import { homeObjOne, homeObjTwo, homeObjThree } from './Data';


function Home() {
  return (
    <div id="homePg">
      <MainSection {...homeObjOne} />
      <MainSection {...homeObjThree} />
      <MainSection {...homeObjTwo} />
      
    </div>
  );
}

export default Home;
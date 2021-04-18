import React, { useState, useEffect, useRef } from "react";
// import StickyVideo from 'react-sticky-video';
import 'react-sticky-video/dist/index.css';
import CorporateVideo from '../components/video/CorporateVideo.mp4';
// import VideoPop from 'react-video-pop';
// import { Translate } from "@material-ui/icons";
import { MdKeyboardArrowDown} from 'react-icons/md';

import { IconContext } from 'react-icons/lib';
import './VedioSection.css'
import { Link } from 'react-scroll';

function VedioSection() {

    const prevScrollY = useRef(0);

    const [goingUp, setGoingUp] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        const currentScrollY = window.scrollY;
        const target = document.getElementsByClassName('smallWindow');
      
        if (prevScrollY.current > currentScrollY && !goingUp) {
          setGoingUp(true);

        }
  
        prevScrollY.current = currentScrollY;
        console.log(goingUp, currentScrollY);
        if(currentScrollY>1000){
          target[0].style.display = "block"; 
          console.log("working")
        }else if(currentScrollY<999){
          target[0].style.display = "none"; 
          console.log(" n working")
        }


      };
  
      window.addEventListener("scroll", handleScroll, { passive: true });
  
      return () => window.removeEventListener("scroll", handleScroll);
    }, [goingUp]);
  


    return (
        <>
            
        <div className="smallWindow"
            style={{
           }}>
                <video className="smallVideo"          
                  autoPlay
                  loop
                  muted >
                  <source src={CorporateVideo} type="video/mp4"/>
               </video>
        </div>
        <div className="largeWindow">


                <video className="largeVideo"
                      autoPlay
                      loop
                      muted >
                    <source src={CorporateVideo} type="video/mp4"/>
                  </video>
                  <IconContext.Provider value={{ color: '#fff', size : "50" }}>
                  <Link className='downButton'  activeClass="active" to="homePg" spy={true} smooth={true} duration={1000}>
                  <MdKeyboardArrowDown  className="downButton" />
                  </Link>
                  </IconContext.Provider>
        </div>

      

    </>

    )
}

export default VedioSection

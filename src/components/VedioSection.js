import React, { useState, useEffect, useRef } from "react";
// import StickyVideo from 'react-sticky-video';
import 'react-sticky-video/dist/index.css';
import CorporateVideo from '../components/video/CorporateVideo.mp4';
// import VideoPop from 'react-video-pop';
// import { Translate } from "@material-ui/icons";


function VedioSection() {
    const prevScrollY = useRef(0);

    const [goingUp, setGoingUp] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        const currentScrollY = window.scrollY;
        if (prevScrollY.current < currentScrollY && goingUp) {
          setGoingUp(false);
        }
        if (prevScrollY.current > currentScrollY && !goingUp) {
          setGoingUp(true);
        }
  
        prevScrollY.current = currentScrollY;
        console.log(goingUp, currentScrollY);
      };
  
      window.addEventListener("scroll", handleScroll, { passive: true });
  
      return () => window.removeEventListener("scroll", handleScroll);
    }, [goingUp]);
  


    return (
        <>
        <div 
            style={{
            position:"fixed",
            backgroundColor:"black",
          
            width:"350px",
            height:"200px",
            top: "7em",
            right: "1em",
            zIndex:7}}>
                <video style={{
                    position:"absolute",
                    backgroundSize:"cover",
                    width:"100%",
                    height:"100%",
                    zIndex:7,

                }}
      autoPlay
      loop
      muted >
    <source src={CorporateVideo} type="video/mp4"/>
  </video>
        </div>
        <div 
        style={{
            
            padding: "10px 10px 10px 10px",
            display: "flex",
            flexDirection: "column",
            width:"100%",
            height:"auto",
            justifyContent: "center",
            background: "#fafafa",
            zIndex:99}}>


<video style={{zIndex:9}}
      autoPlay
      loop
      muted >
    <source src={CorporateVideo} type="video/mp4"/>
  </video>
  {/* <VideoPop Src={CorporateVideo} mute={true} autoplay={true}   root="video-root" ratio={{w:4,h:3}} /> */}


        </div>



</>

    )
}

export default VedioSection

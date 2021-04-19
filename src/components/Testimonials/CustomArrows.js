// import { getDefaultNormalizer } from "@testing-library/dom";
import * as React from "react";
import { MdKeyboardArrowRight,MdKeyboardArrowLeft } from 'react-icons/md';
import './Testimonial.css';
import { IconContext } from 'react-icons/lib';
// const CustomLeftArrow = ({ onClick }) => (
//   <i onClick={() => onClick()} className="custom-left-arrow" />
// );
// const CustomRightArrow = ({ onClick }) => {
//   return <i className="custom-right-arrow" onClick={() => onClick()} />;
// };

// const CustomButtonGroup = ({ next, previous, goToSlide, carouselState }) => {
//   const { totalItems, currentSlide } = carouselState;
//   return (
//     <div className="custom-button-group">
//       <div>Current slide is {currentSlide}</div>
//       <button onClick={() => previous()}>Previous slide</button>
//       <button onClick={() => next()}>Next slide</button>
//       <button
//         onClick={() => goToSlide(Math.floor(Math.random() * totalItems + 1))}
//       >
//         Go to a random slide
//       </button>
//     </div>
//   );
// };
const CustomButtonGroupAsArrows = ({ next, previous }) => {
  return (
    <div
      style={{
        
        display:"flex",
        
        justifyContent:"center",
        // paddingLeft:"-50px",
        //padding:-50,
        //  paddingRight:"50px",
        width:"100%",
        zIndex:9,

        transform: "translate(-25px, -135px)",
       }}> 
        <IconContext.Provider value={{ color: 'white', size : "50" }}>  
        < MdKeyboardArrowLeft onClick={next}/>
  
        <div style = {{width: "100%"}}> </div>
        <MdKeyboardArrowRight className="buttonRight" onClick={previous}/>
       {/* <button onClick={previous}>Prev</button> 
      <button onClick={next}>Next</button> */}
      </IconContext.Provider>
    </div>
  );
};

export default CustomButtonGroupAsArrows

import React from 'react';
import './Testimonial.css';
// import autoBind from "auto-bind"
// import { MdKeyboardArrowRight,MdKeyboardArrowLeft } from 'react-icons/md';
import { makeStyles } from '@material-ui/core/styles';
// import Avatar from '@material-ui/core/Avatar';
import {
      CardContent,

    Typography,
    
    
 
  
} from '@material-ui/core';
// import { IconContext } from 'react-icons/lib';
// import { ImQuotesLeft, ImQuotesRight} from 'react-icons/im';

import  CardActionArea from '@material-ui/core/CardActionArea';
import CustomButtonGroupAsArrows from './CustomArrows'
import Paper from '@material-ui/core/Paper';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 350,
    minWidth: 280,
    
    justifyContent:'center',
    alignItems:"center",
    textAlign:"center",
    [theme.breakpoints.down('md')]: {
      maxWidth: 300,
       minWidth:150,
       },
    [theme.breakpoints.down('sm')]: {
      maxWidth: 220,
       minWidth:130,
       },
  },
  media: {
    height: 0,
    paddingTop: '58.25%', // 16:9
    justifyContent:'center',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  paragraph:{
    margin:10,
    textAlign:"center",
    color:"#1c2237",
    fontStyle: 'italic',
    fontSize:'12px'
  },
 
}));
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items:3,
    partialVisibilityGutter: 0
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    partialVisibilityGutter:0
  },
  tablet: {
    breakpoint:{ max: 1024, min: 650 },
    items: 2,
    partialVisibilityGutter: 0
  },
  mobile: {
    breakpoint: { max: 700, min: 0 },
    items: 1,
    partialVisibilityGutter: 0
  }
};


function TestimonialSection() {
  const classes = useStyles();
  
  return (
    <div>
       <div
    id="testimonialPg"
        className='home__mainT-section darkBg'> 
      
        <div className='container'>
        <div class="headingT">Testimonial</div>
        <div>
       
      <Carousel
      responsive={responsive}
      // showArrows={true}
      infinite={true}
      // centerMode={true}
      partialVisible={true}
      arrows={true}
      >
 <div>
 <div style={{margin:"60px"}} >
  <Paper className={classes.root}  >
      <CardActionArea>
      <CardContent>   
      <img src="images/features/svg-7.svg" alt="title" width="100px" height="100px"/>
          
          <Typography className={classes.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
          </Typography>
          </CardContent>
          </CardActionArea>
    
    </Paper>
</div>
  </div>
  <div>
   <div style={{margin:"60px"}} >
  <Paper className={classes.root}  >
      <CardActionArea>
      <CardContent>   
      <img src="images/features/svg-7.svg" alt="title" width="100px" height="100px"/>
          
          <Typography className={classes.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
          </Typography>
          </CardContent>
          </CardActionArea>
   
    </Paper>
    </div>
  </div>
  <div>
  <div style={{margin:"60px"}} >
  <Paper className={classes.root}  >
      <CardActionArea>
      <CardContent>   
      <img src="images/features/svg-7.svg" alt="title" width="100px" height="100px"/>
         
          <Typography className={classes.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
          </Typography>
          </CardContent>
          </CardActionArea>
    </Paper>
 </div>
  </div>
  
 
  

</Carousel>;

</div>
</div>
</div>
   </div>
  )
}

export default TestimonialSection

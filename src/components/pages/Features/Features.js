import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { Typography } from '@material-ui/core';
import { CgAlignCenter } from 'react-icons/cg';
import Paper from '@material-ui/core/Paper';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import FeatureSection from '../../FeatureSection';
import {feature1} from './Data';
import '../../FeaturesSection.css'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),

    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
  cardAlign:{
    display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign:'center',
    
  },
  typoAlign:{
    margin :"10px",
    padding:"auto",
    textAlign: "center",
    
    color:"#1c2237"
   
  },
  myContainer:{
    padding:"25px",
    

  },
  title:{

  }
}));

export default function Features() {
  const classes = useStyles();
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
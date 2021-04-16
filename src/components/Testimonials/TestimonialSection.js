import React from 'react';
import Carousel from "react-material-ui-carousel"
import autoBind from "auto-bind"
import './Testimonial.scss';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Grid,
    
 
  
} from '@material-ui/core';
import { IconContext } from 'react-icons/lib';
import { ImQuotesLeft, ImQuotesRight} from 'react-icons/im';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 225,
    minWidth: 200,
    padding:10,
    justifyContent:'center',
    alignItems:"center",
    textAlign:"center",
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
    marginTop:10,
 
    textAlign:"center",
    color:"#1c2237",
    fontStyle: 'italic',
    fontSize:'12px',
    height:"100%",
  },
  quote:{
  textAlign:"center",
    marginRight: "50px",
    marginLeft: "50px",
    fontSize: "1rem",
    fontWeight: 100,
    lineHeight: 1.2,
    letterSpacing: "0.0075em",
  },
 large:{
    width: theme.spacing(7),
    height: theme.spacing(7),

    verticalAlign:"middle",
    display: "inline-block",
 }
  
}));
function Banner(props) {
  if (props.newProp) console.log(props.newProp)
  const contentPosition = props.contentPosition ? props.contentPosition : "left"
  const totalItems = props.length ? props.length : 1;
  const mediaLength = totalItems - 1;
  const classes = useStyles();
  let items = [];
  const content = (
   
        
        <div className='container'>
        <div class="headingf" style={{padding:10}}>Testimonials</div>
          <div className='rowf home__mainf-colf'
            style={{
              display: 'flex',
              flexDirection: 'colf'}}>
    <IconContext.Provider value={{ color: '#1c2237' }}>
      <Grid item xs={12 / totalItems} key="content">
          
    
      <CardContent className={classes.paragraph}>   
      <Avatar alt="aimg" src="images/features/svg-7.svg" className={classes.large} />
     
          <Typography variant="h6" className={classes.quote} ><ImQuotesLeft/>{props.item.Name}<ImQuotesRight/></Typography>
          <Typography className={classes.paragraph}>
           Sample
          </Typography>
          </CardContent>
          
    
      </Grid>
      </IconContext.Provider>
      </div>
      </div>
    
  )


  for (let i = 0; i < mediaLength; i++) {
    

      const media = (
          <Grid item xs={12 / totalItems} key={items.Name}>
              <CardMedia
                  className="Media"
                  
              >
                 
              </CardMedia>

          </Grid>
      )

      items.push(media);
  }

  if (contentPosition === "left") {
      items.unshift(content);
  } else if (contentPosition === "right") {
      items.push(content);
  } else if (contentPosition === "middle") {
      items.splice(items.length / 2, 0, content);
  }

  return (
      <Card raised className="Banner">
          <Grid container spacing={0} className="BannerGrid">
              {items}
          </Grid>
      </Card>
  )
}

const items = [
  {
      Name: "Lorem ipsum dolor sit amet, conse Etiam sollicitudin convallis augue, quis bibendum dolor facilisis at. Nam molestie",

      contentPosition: "middle",
  },
  {
      Name:" Lorem ipsum dolor sit amet, conse Etiam sollicitudin convallis augue, quis bibendum dolor facilisis at. Nam molestie posuere turpis, vitae faucibus urna. Mauris quis massa vitae elit dapibus eleifend at a enim. Maecenas venenatis erat id bibendum scelerisque." ,
      
      contentPosition: "middle",
     
  },
  {
      Name: "Lorem ipsum dolor sit amet, conse Etiam sollicitudin convallis augue, quis bibendum dolor facilisis at. Nam molestie",
     
      contentPosition: "middle",
     
  },
  {
    Name: "Lorem ipsum dolor sit amet, conse Etiam sollicitudin convallis augue, quis bibendum dolor facilisis at. Nam molestie",
  
    contentPosition: "middle",
    
    },
    {
        Name: "Lorem ipsum dolor sit amet, conse Etiam sollicitudin convallis augue, quis bibendum dolor facilisis at. Nam molestie",
      
        contentPosition: "middle",
        
        },
        {
            Name: "Lorem ipsum dolor sit amet, conse Etiam sollicitudin convallis augue, quis bibendum dolor facilisis at. Nam molestie",
          
            contentPosition: "middle",
            
            }
            , {
                Name: "Lorem ipsum dolor sit amet, conse Etiam sollicitudin convallis augue, quis bibendum dolor facilisis at. Nam molestie",
              
                contentPosition: "middle",
                
                }

]

class BannerExample extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
          autoPlay: false,
          animation: "slide",
          indicators: false,
          timeout: 500,
          navButtonsAlwaysVisible: true,
          navButtonsAlwaysInvisible: false,
          cycleNavigation: true
      }

      autoBind(this);
  }


  render() {
      return (
        <div id="pricingPg" className='home__mainp-section darkBg'> 
          <div style={{ marginTop: "50px", color: "#494949" }}>
            

              <Carousel
                  className="Example"
                  autoPlay={this.state.autoPlay}
                  animation={this.state.animation}
                  indicators={this.state.indicators}
                  timeout={this.state.timeout}
                  cycleNavigation={this.state.cycleNavigation}
                  navButtonsAlwaysVisible={this.state.navButtonsAlwaysVisible}
                  navButtonsAlwaysInvisible={this.state.navButtonsAlwaysInvisible}
                  next={(now, previous) => console.log(`Next User Callback: Now displaying child${now}. Previously displayed child${previous}`)}
                  prev={(now, previous) => console.log(`Prev User Callback: Now displaying child${now}. Previously displayed child${previous}`)}
                  onChange={(now, previous) => console.log(`OnChange User Callback: Now displaying child${now}. Previously displayed child${previous}`)}

                  navButtonsProps={{         
                    style: {
                        backgroundColor: 'grey',
                        borderRadius: 50
                    }
                }} 
                navButtonsWrapperProps={{   
                    style: {
                        bottom: '0',
                        top: 'unset'
                    }
                }}
          
              >
                  {
                      items.map((item, index) => {
                          return <Banner item={item} key={index} contentPosition={item.contentPosition} />
                      })
                  }
              </Carousel>
                  </div>
          </div>

      )
  }
}

export default BannerExample;
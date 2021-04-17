import React from 'react';
import { Button } from './Button';
import './Pricing.css';
import { IconContext } from 'react-icons/lib';

import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 450,
      minWidth:350,

      [theme.breakpoints.down('sm')]: {
     maxWidth: 550,
      minWidth:450,
      },

      
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
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
    subParagraph1_c:{
      maxWidth:500,
      marginLeft:50,
      marginRight:50
    },
    button:{
      justifyContent:'center',
      paddingTop:1,
      paddingLeft:34
    }
  
  }));
function Pricing({
    title_c,
    subheader_c,
    subheader2_c,
    paragraph1_c,
    subParagraph1_c,
    tag

}) {
    const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <IconContext.Provider value={{ color: '#fff', size: 64 }}>

<div style={{ margin:"20px"}}>
               
               <div className='top-line'>{tag}</div> 
             <Card className={classes.root} elevation={3} >
               <CardHeader title={title_c} subheader={subheader_c}/>
                 <CardMedia subheader={subheader2_c}/>
                   <CardContent >
                     <Typography variant="body2" color="textSecondary" component="p">
                       {subheader2_c} 
                     </Typography>
                   </CardContent>
                   <CardContent className={classes.button}>
                 {/* <div className='pricing__container-card'>   */}
                   <Button  buttonColor="primary" >
                      Try for free
                   </Button>    
                   {/* </div>  */}
                   </CardContent>
                   <Typography paragraph className={classes.subParagraph1_c}>{paragraph1_c}</Typography>
                 <Typography className={classes.subParagraph1_c} paragraph>
                  {subParagraph1_c}
                 </Typography>
               <CardActions disableSpacing>
                 <IconButton
                 className={clsx(classes.expand, {
                   [classes.expandOpen]: expanded,
                 })}
                 onClick={handleExpandClick}
                 aria-expanded={expanded}
                 aria-label="show more"
                 >
                 <ExpandMoreIcon />
                </IconButton>
               </CardActions>
             <Collapse in={expanded} timeout="auto" unmountOnExit>
               <CardContent>
                 <Typography paragraph>{paragraph1_c}</Typography>
                 <Typography paragraph>
                  {subParagraph1_c}
                 </Typography>
               </CardContent>
             </Collapse>
           </Card>
       </div>
       
    </IconContext.Provider>
  );
}
export default Pricing;
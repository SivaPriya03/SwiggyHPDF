import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import 'font-awesome/css/font-awesome.min.css'
import Typography from 'material-ui/Typography'
import Paper from 'material-ui/Paper'

const styles = theme => ({
  root:
  {
    width:'75%',
    height:'12.5em',
  },
});
  
function Loading(props) {
  const { classes } = props;
  return (
    <div style={{height:'15em',marginLeft:'20em',textAlign:'center'}}> 
            <Paper elevation={4} className={classes.root}>
              <div style={{height:'1.5em'}}></div>   
                <Typography variant="headline"component="h3">
                  Showing Restaurants near you ...

                </Typography>
                <div className="spinner" style={{marginBottom:'10em'}}>
              <div className="bounce1"></div>
              <div className="bounce2"></div>
              <div className="bounce3"></div>
            </div>
            
              
            </Paper>

          </div>
  );
}

Loading.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Loading);
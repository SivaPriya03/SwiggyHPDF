import React from 'react';
import { withStyles } from 'material-ui/styles';
import 'font-awesome/css/font-awesome.min.css'
import Grid from 'material-ui/Grid'
const styles = theme => ({
  root: {
    width: 'inherit',
    maxWidth: '100%',
    paddingTop:'1em',
    marginLeft:'20em',
    backgroundColor: theme.palette.background.paper,
  },
  avatar:{
    width:60,
    height:60,
    backgroundColor:'#fff',
    color:'#6E6E6E',
    border:'1px solid #6E6E6E',
    borderRadius:'50px',
  },
  list:{
    float: 'left',
    margin:' 0 15px',

  },
  text:{
    fontFamily: "\"Segoe UI\",  \"Arial\", sans-serif",
    '&::selection':{
      "color":"#f5861f",
      "background":"#f5f5f5",
    },
    fontSize:'13px',fontWeight:'400',opacity:'.8',marginTop:'em',
    padding:'12px',
  },
});

function Footer(props) {
  const { classes } = props;
  return (
    <Grid container>
      <Grid item xs={12}>
      </Grid>
    </Grid>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
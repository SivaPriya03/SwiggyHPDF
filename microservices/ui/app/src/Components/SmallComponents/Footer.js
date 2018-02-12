import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, { ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import FlashOn from 'material-ui-icons/FlashOn';
import NotificationsActive from 'material-ui-icons/NotificationsActive';
import Payment from 'material-ui-icons/Payment';

import 'font-awesome/css/font-awesome.min.css'

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
    <List className={classes.root}>
      <ListItem className={classes.list}>
        <Avatar className={classes.avatar}>
          <FlashOn/>
        </Avatar>
        <h3 className={classes.text}>Lightning Fast Delivery</h3>
      </ListItem>
      <ListItem className={classes.list} >
        <Avatar className={classes.avatar}>
          <NotificationsActive />
        </Avatar>
        <h3 className={classes.text}>No Minimum Order</h3>
      </ListItem>
      <ListItem className={classes.list} >
        <Avatar className={classes.avatar}>
          <Payment />
          <i className="fa fa-money"/>
        </Avatar>
        <h3 className={classes.text}>Pay via Card/Cash</h3>
      </ListItem>

    </List>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
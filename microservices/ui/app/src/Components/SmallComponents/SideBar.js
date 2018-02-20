import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css'
import {withStyles} from 'material-ui/styles'
import List, { ListItem, ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import AccountBalanceWallet from 'material-ui-icons/AccountBalanceWallet';
import Divider from 'material-ui/Divider';

const styles= theme=>({
	primaryActive:{
		fontWeight:'700',
		color:'white',
	},
	secondaryActive:{
		fontSize:'x-small',
		fontWeight:'700',
		color:'white',
	},
	avatar:{
		backgroundColor:'#d51e',
		display:'flex',
		'&:hover':{
			transform:'scale(1.2)',
			boxShadow:'2px 2px 4px 2px #9e9e9e',
		},
	},
	activeAvatar:{
		backgroundColor:'white',
		color:'#d51e',
	},
	secondary:{
		fontSize:'x-small',
		fontWeight:'700',
		'&:hover':{
			color:'#e65100',
		},
	},
	primary:{
		fontWeight:'700',
		'&:hover':{
			color:'#e65100',
		},
	},
	headline:{
		fontSize:'small',
		fontWeight:'bold',
	},

});
class Restaurants extends Component{
	constructor(props){
		super(props);
		this.state={
			active:Array(5).fill(false),
		};
	}
	componentDidMount(){
		const actives=this.state.active.slice();
		actives[0]=true;
		this.setState({active:actives});
	}
	listChange(i){
		const actives=Array(5).fill(false);
		actives[i]=true;
		this.setState({active:actives});
	}
  render() {
  	const classes=this.props.classes;
   	const activeBack={backgroundColor:'#d51e',};
    return (
    		<List>
		        <ListItem button onClick={()=>this.listChange(0)} style={this.state.active[0]?activeBack:null} > 
		          <Avatar className={this.state.active[0]?classes.activeAvatar:classes.avatar}>
		          	<i className="fa fa-arrow-circle-right"></i>
		          </Avatar>
		          <ListItemText  classes={{primary:this.state.active[0]?classes.primaryActive:classes.primary,secondary:this.state.active[0]?classes.secondaryActive:classes.secondary}} 
		          	 primary="All Restaurants" secondary="100 OPTIONS" />
		        </ListItem>
		        <ListItem button onClick={()=>this.listChange(1)} style={this.state.active[1]?activeBack:null}>
		          <Avatar className={this.state.active[1]?classes.activeAvatar:classes.avatar}>
		            <i className="fa fa-fire" ></i>
		          </Avatar>
		          <ListItemText classes={{primary:this.state.active[1]?classes.primaryActive:classes.primary,secondary:this.state.active[1]?classes.secondaryActive:classes.secondary}} primary="Popular" secondary="31 OPTIONS" />
		        </ListItem>
		        <li>
		          <Divider inset />
		        </li>
		        <ListItem button onClick={()=>this.listChange(2)} style={this.state.active[2]?activeBack:null}>
		          <Avatar className={this.state.active[2]?classes.activeAvatar:classes.avatar}>
		          	<i className="fa fa-certificate">
		          		<i className="fa fa-percent"></i>
		          	</i>
		          </Avatar>
		          <ListItemText classes={{primary:this.state.active[2]?classes.primaryActive:classes.primary,secondary:this.state.active[2]?classes.secondaryActive:classes.secondary}} primary="Offers around you" secondary="10 OPTIONS" />
		        </ListItem>
		        <Divider inset component="li" />
		        <ListItem button onClick={()=>this.listChange(3)} style={this.state.active[3]?activeBack:null}>
		          <Avatar className={this.state.active[3]?classes.activeAvatar:classes.avatar}>
		          	<i className="fa fa-leaf"></i>
		          </Avatar>
		          <ListItemText classes={{primary:this.state.active[3]?classes.primaryActive:classes.primary,secondary:this.state.active[3]?classes.secondaryActive:classes.secondary}}
		          	 primary="Vegetarian Options" secondary="23 OPTIONS" />
		        </ListItem>
		        <Divider inset component="li" />
		        <ListItem button onClick={()=>this.listChange(4)} style={this.state.active[4]?activeBack:null}>
		          <Avatar className={this.state.active[4]?classes.activeAvatar:classes.avatar}>
		          	<AccountBalanceWallet/>
		          </Avatar>
		          <ListItemText classes={{primary:this.state.active[4]?classes.primaryActive:classes.primary,secondary:this.state.active[4]?classes.secondaryActive:classes.secondary}}
		          	 primary="Pocket Friendly" secondary="5 OPTIONS" />
		        </ListItem>
		      </List>
    );
  }
}

export default withStyles(styles)(Restaurants)


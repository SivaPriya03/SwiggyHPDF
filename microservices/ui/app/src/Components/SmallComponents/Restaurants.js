import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css'
import Grid from 'material-ui/Grid'
import {withStyles} from 'material-ui/styles'
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button'
import Hot1 from '../../Resources/Hot1.jpg'
import Hot2 from '../../Resources/Hot2.jpg'
import Hot3 from '../../Resources/Hot3.jpg'
import Hot4 from '../../Resources/Hot4.jpg'
import Hot5 from '../../Resources/Hot5.jpg'
import Hot6 from '../../Resources/Hot6.jpg'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import GridList, { GridListTile, } from 'material-ui/GridList';
import Loading from './Loading.js'
import SideBar from './SideBar.js'

const styles= theme=>({
	 card: {
	    maxWidth: 212,
	    height:'fit-content',
	    marginLeft:'0.8em',
	    cursor:'pointer',
	    '&:hover':{
	    	border:'2px solid lightgrey',
	    	boxShadow:'1px 2px 4px 0px rgba(0,0,0,0.2)',
	    }
	  },
	  media: {
	    height: '8em',
	    width:'13.25em',
	  },
	  cardContent:{
	  	paddingBottom:0,
	  	height:'6.5em',
	  },
	  body1:{
	  	fontSize:'0.75em',
	  },
	  body2:{
	  	fontSize:'0.5em',
	  },
	  gridList:{
	  	marginBottom:'1em',
	  	paddingBottom:'inherit',
	  },
	
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
const SampleHotels=[{
	image:Hot1,
	name:'Firewood Biryani',
	type:'Chicken biryani,Chicken 65,Chicken Tikka',
	rating:'3.9',
	deliveryTime:'25mins',
	minCost:'Rs.200 for Two',
},{
	image:Hot2,
	name:'Fresh Bites',
	type:'North Indian,South Indian,Chinese,Fast Food,Juices',
	rating:'4.5',
	deliveryTime:'35mins',
	minCost:'Rs.100 for Two',
},{
	image:Hot3,
	name:'The Bowl Company',
	type:'Continental,Indian,Pan-Asian',
	rating:'4.5',
	deliveryTime:'20mins',
	minCost:'Rs.300 for Two',
},
{
	image:Hot4,
	name:'Hotel Tom\'s Restaurant',
	type:'North Indian,Biryani',
	rating:'3.8',
	deliveryTime:'50mins',
	minCost:'Rs.150 for Two',
},
{
	image:Hot5,
	name:'Tadka Singh',
	type:'Punjabi,North Indian',
	rating:'4.1',
	deliveryTime:'58mins',
	minCost:'Rs.300 for Two',
},
{
	image:Hot6,
	name:'Art Of Delight',
	type:'IceCream,Desserts',
	rating:'4.5',
	deliveryTime:'42mins',
	minCost:'Rs.250 for Two',
},
];
class Restaurants extends Component{
	constructor(props){
		super(props);
		this.state={
			loading:true,
			active:Array(5).fill(false),
		};
		setTimeout(()=>this.setState({loading:false}),6000);
		//this.listChange = this.listChange.bind(this);
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
  	if(this.state.loading){
  		return(
  			<div>
	  			<Loading/>
	  		</div>
  			);
  	}
    return (
    	<Grid container className="restaurant" style={{minHeight:'20em',paddingTop:'1.5em'}}>
    		<Grid item style={{width:'3em'}}/>
    		<Grid item className="sideBar" style={{padding:0,paddingTop:'0.3em',width:'fit-content',height:'fit-content',boxShadow:'0 4px 8px 0 rgba(0,0,0,0.2)'}}>
    			<SideBar/>
    		</Grid>
    		<Grid item xs={8} style={{marginLeft:'3em'}}>
    			 <GridList cellHeight={180} cols={3} >
 					     				  
    				{SampleHotels.map(sample => (
          <GridListTile key={sample.image} classes={{tile:classes.gridList}} id="ssh" style={{height:'fit-content'}}>
	          	<Card className={classes.card}>
	        <CardMedia
	          className={classes.media}
	          image={sample.image}
	          title="Contemplative Reptile"
	        />
	        <CardContent className={classes.cardContent}>
	          <Typography variant="headline" component="h2" classes={{headline:classes.headline}}>
	             {sample.name}
	          </Typography>
	          <Typography component="p" classes={{body1:classes.body1}}>
	          {sample.type}
	          </Typography>
	          <Typography variant="caption" classes={{body1:classes.body1}} style={{display:'flex',paddingTop:'1em'}}>
	             <div style={{width:'fit-content',paddingRight:'0.5em',backgroundColor:'#48c479',color:'white'}}>
	             	<i className="fa fa-star"></i>{sample.rating}
	             </div>&nbsp; &bull; {sample.deliveryTime} &bull;{sample.minCost} 
	          </Typography>
	        </CardContent>
	        <CardActions style={{justifyContent:'center'}}>
	          
	          <Button size="small" style={{color:'#5d8ed5'}}>
	            Quick View
	          </Button>
	        </CardActions>
	      </Card>
            
          </GridListTile>
        ))}
        		{SampleHotels.map(sample => (
          <GridListTile key={sample.image} classes={{tile:classes.gridList}} id="ssh" style={{height:'fit-content'}}>
	          	<Card className={classes.card}>
	        <CardMedia
	          className={classes.media}
	          image={sample.image}
	          title="Contemplative Reptile"
	        />
	        <CardContent className={classes.cardContent}>
	          <Typography variant="headline" component="h2" classes={{headline:classes.headline}}>
	             {sample.name}
	          </Typography>
	          <Typography component="p" classes={{body1:classes.body1}}>
	          {sample.type}
	          </Typography>
	          <Typography variant="caption" classes={{body1:classes.body1}} style={{display:'flex',paddingTop:'1em'}}>
	             <div style={{width:'fit-content',paddingRight:'0.5em',backgroundColor:'#48c479',color:'white'}}>
	             	<i className="fa fa-star"></i>{sample.rating}
	             </div>&nbsp; &bull; {sample.deliveryTime} &bull;{sample.minCost} 
	          </Typography>
	        </CardContent>
	        <CardActions style={{justifyContent:'center'}}>
	          
	          <Button size="small" style={{color:'#5d8ed5'}}>
	            Quick View
	          </Button>
	        </CardActions>
	      </Card>
            
          </GridListTile>
        ))}
        </GridList>
			</Grid>
    	</Grid>
    );
  }
}

export default withStyles(styles)(Restaurants)


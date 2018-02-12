import React, { Component } from 'react'
import A from '../Resources/A.jpg';
import B from '../Resources/B.jpg';
import C from '../Resources/C.jpg';


const items = [
  {
    src:A,
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src:B,
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src:C,
    altText: 'Slide 3',
    caption: 'Slide 3'
  }
];

export default class Example extends Component {
  render() {
    var settings = {
      className: 'gg',
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay:true,
    };
    let i=0;
    const classes=this.props.classes;
    return (
      <div className="slideshow-container" style={{height:'23em',}}>
          {items.map(item => 
              <div key={i++} className="mySlides fade">
                <div className="numbertext">1 / 3</div>
                <img  src={item.src} className="img" alt={item.altText}/>
                <div className="text">Caption Text</div>
              </div>

          )}
        </div>

    );
  }
}
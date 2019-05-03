import React, { Component } from 'react';
import { carouselData } from '../../data'
// Complete this Carousel 


export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      carousel: [],
      index: 0,
     isNext: true
    }
  }
  componentDidMount(){
    this.setState({
      carousel: carouselData,

    })
  }

  leftClick = () => {
    let index = this.state.index,
    length = this.state.carousel.length;

      if( index < 1 ) {
        index = length;
      }

      index = index - 1;

      this.setState({
        index: index,
        isNext: false
      });
  }

  rightClick = () => {
    let index = this.state.index,
        length = this.state.items.length - 1;
    
          if( index === length ) {
            index = -1;
          }
          
          index = index + 1;
          
          this.setState({
            index: index,
            isNext: true
          });
  }
 

  selectedImage = () => {
    
    return <img src={this.state.carousel.index} style={{display: 'block'}} alt="carousel" />
  }
  
  render(){
    return (
      <div className="carousel">
        <div className="left-button" onClick={this.leftClick}>{"<"}</div>
        <div className="right-button" onClick={this.rightClick}>{">"}</div>
      </div>
    )
  }
}
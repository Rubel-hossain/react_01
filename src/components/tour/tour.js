import React, { Component } from 'react'
import "./tour.scss";

export default class tour extends Component {

    constructor(props){
        super(props);

    }

  render() {
    
    const {id, city, img, name, info } = this.props.tour;
    const removeTour = this.props.removeTour;
    console.log(removeTour);

    return (
      <div className="single-tour">
        <div className="tour-image">
          <img src={img} alt={name}/>
         </div>
        <h3>{name}</h3>
        <h4>City Name: {city}</h4>
        <p>{info}</p>
        <button className="delete-btn" onClick={()=>removeTour(id)}>Delete</button>
      </div>
    )
  }
}

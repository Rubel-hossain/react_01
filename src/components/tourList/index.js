import React, { Component } from 'react';
import Tour from "../tour/tour";
import {tourData} from "../../assets/tourData";
import "./index.scss";

export default class index extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            tourData: tourData
        }

    }

    removeTour = (id)=>{
            
        const {tourData} = this.state;
        const sortedData = tourData.filter(tour=> id !== tour.id);

        this.setState({
            tourData: sortedData
        });
    }
  render() {

   const {tourData} = this.state;

    return (
      <section className="tour-wrapper">
        <div className="container all-tours"> 
           {tourData.map(tour=>{
               return (
                   <Tour key={tour.id} tour={tour} removeTour={this.removeTour}/>
               );
           })}
        </div>
      </section>
    )
  }
}

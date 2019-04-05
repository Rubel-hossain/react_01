import React, { Component } from 'react';
export default class navbar extends Component {
  render() {
    return (
      <div className="container">
        <nav className="main-nav">
            <div className="logo"> 
               <a href="#"><img src="./img/logo.png" alt="site logo"/></a>
            </div>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
      </div>
    )
  }
}

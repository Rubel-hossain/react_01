import React, { Component } from 'react';
import Navbar from "./components/navbar/navbar";
import TourList from "./components/tourList/index";
import  "./components/navbar/navbar.scss";
import './App.scss';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <TourList/>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Calendar from "../container/calenda/Calenda";
import Navbar from "./Navbar";

class MainView extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Calendar/>
      </div>
    );
  }
}

export default MainView;
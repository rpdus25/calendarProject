import React, { Component } from 'react';
import './App.css';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import Navbar from './component/navbar/Navbar.js';
import Calendar from './Calendar.js';
import {Switch, Route } from 'react-router-dom';

const Main = () => (
    <Switch>
      <Route exact path="/" component={Calendar}></Route>
    </Switch>
)



class App extends Component {
  render() {
    return (
        <div className="App">
          <Navbar/>
          <Main/>
        </div>
    );
  }
}

export default App;

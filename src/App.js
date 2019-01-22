import React, { Component } from 'react';
import './App.css';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import {Switch, BrowserRouter as Router, Route, Link, NavLink, Redirect, withRouter} from "react-router-dom";
import Login from './component/LoginForm'
import MainView from "./component/MainView";


const Main = () => (
  <Switch>
    <Route exact path="/" component={MainView}/>
    <Route path="/login" component={Login}/>
    <Route path="/home" component={MainView}/>
  </Switch>
);

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     redirect: true,
  //   }
  // }

  render () {

    // const renderRedirect = () => {
    //   if (this.state.redirect) {
    //     return <Redirect to='/login'/>
    //   } else {
    //     return <Redirect to='/'/>
    //   }
    // }

    return (
      <div className="App">
        {/*{renderRedirect()}*/}
        <Main/>
      </div>
    )
  }
}

export default App;
import React, { Component } from 'react';
import './App.css';
// import 'materialize-css';
// import 'materialize-css/dist/css/materialize.min.css';
import Navbar from './component/Navbar.js';
import LoginForm from './component/LoginForm';
import Calendar from './Calendar.js';
import {Switch, BrowserRouter as Router, Route, Link, Redirect, withRouter } from 'react-router-dom';
import { Home, Auth, Login } from './pages';
// import { PrivateRoute } from '../_components';


const Main = () => (
    <Switch>
        <Route path="/login" component={Login}/>
        {/*<PrivateRoute exact path="/" component={Calendar}/>*/}
        <Route path="/home" component={Home}/>
    </Switch>
);

class App extends Component {
  constructor(props) {
    super(props);

    const { dispatch } = this.props;
    // history.listen((location, action) => {
    //   // clear alert on location change
    //   dispatch(alertActions.clear());
    // });
  }

  render() {
    return (
        <div className="App">
          {/*<Navbar/>*/}
          <Main/>
          {/*<LoginForm/>*/}
        </div>
    );
  }
}

export default App;

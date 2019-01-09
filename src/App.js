import React, { Component } from 'react';
import './App.css';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import Navbar from './component/Navbar.js';
import LoginForm from './component/LoginForm';
import Calendar from './Calendar.js';
import {Switch, Route } from 'react-router-dom';
import { Home, Auth, Login } from './pages';

const Main = () => (
    <Switch>
      <Route exact path="/" component={Calendar}></Route>
      <Route exact path="/home" component={Home}/>
      <Route path="/auth" component={Auth}/>
      <Route path="/login" component={Login}/>

    </Switch>
)



class App extends Component {
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

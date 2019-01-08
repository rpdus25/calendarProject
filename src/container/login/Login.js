import React, { Component } from 'react';
import './LoginForm.css';
import {NavLink} from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../action/user.js';
import LoginForm from '../component/LoginForm.jsx';

class Login extends Component {
  render() {
    const { user } = this.props;
    return (
      <LoginForm
        isLoggedIn={user.isLoggedIn}
        login={(id, pw) => dispatch(login(id, pw))}
      />
    );
  }
}
function mapStateToProps(state) {
  return { user: state.user };
}
export default connect(mapStateToProps)(Login);

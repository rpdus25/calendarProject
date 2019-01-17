import React, { Component } from 'react';
import './Login.css';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Redirect,
  withRouter
} from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: true
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { dispatch } = this.props;
    const id = this.id.value;
    const pw = this.password.value;
    // dispatch(login(id, pw));
  };

  render () {
    const setRedirect = () => {
      this.setState({
        redirect: false,
      })
      return this.state
    }


    const renderRedirect = () => {
      if (this.state.redirect) {
        return <Redirect to='/login' />
      } else {
        return <Redirect to='/' />
      }
    }

    return (
      <div>
        {renderRedirect()}
        <form onSubmit={this.handleSubmit}>
          <label>
            <span>아이디</span>
            <input ref={(c) => { this.id = c; }} />
          </label>
          <label>
            <span>비밀번호</span>
            <input type="password" ref={(c) => { this.password = c; }} />
          </label>
          <button type="button">로그인</button>
        </form>
      </div>
    )
  }
}


export default Login;
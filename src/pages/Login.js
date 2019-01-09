import React, { Component } from 'react';
import PropTypes from "prop-types";
import {NavLink} from 'react-router-dom';

import { connect } from 'react-redux';

class Login extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     loginAction : true
  //   }
  // }




  // static propTypes = {
  //   user: PropTypes.objectOf(PropTypes.any).isRequired,
  //   dispatch: PropTypes.func.isRequired,
  // };

  handleSubmit = (e) => {
    e.preventDefault();
    const { dispatch } = this.props;
    const id = this.id.value;
    const pw = this.password.value;
    // dispatch(login(id, pw));
  };

  render() {
    return (
        <form onSubmit={this.handleSubmit}>
          <label>
            <span>아이디</span>
            <input ref={(c) => { this.id = c; }} />
          </label>
          <label>
            <span>비밀번호</span>
            <input type="password" ref={(c) => { this.password = c; }} />
          </label>
          <button type="submit">로그인</button>
        </form>

    );
  }
}

export default Login;
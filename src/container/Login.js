import React, { Component } from 'react';
import { connect} from 'react-redux';
import { login } from '../action/user';
import LoginForm from '../component/LoginForm';

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
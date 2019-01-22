import React, { Component } from 'react';

class LoginForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const { login } = this.props;
    const id = this.id.value;
    const pw = this.password.value;
    login(id, pw);
  };

  render() {
    const { isLoggedIn, login } = this.props;
    return (
      isLoggedIn ?
        <div>로그인 성공!!!</div> :
        <form onSubmit={this.handleSubmit}>
          <label>
            <span>아이디</span>
            <input ref={(c) => { this.id = c;}} />
          </label>
          <label>
            <span>비밀번호</span>
            <input type="password" ref={(c) => { this.password = c; }} />
          </label>
          <button type="submit">로그인</button>
        </form>
    );
  }
};
export default LoginForm;
import React, { Component } from 'react';
import './App.css';

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

// function Auth() {
//   return (
//     <Router>
//       <div>
//         <AuthButton />
//         <ul>
//           <li>
//             <Link to="/protected">Protected Page</Link>
//           </li>
//         </ul>
//         {/*<Route path="/public" component={Public} />*/}
//         <Route path="/login" component={Login} />
//         <PrivateRoute path="/protected" component={Protected} />
//       </div>
//     </Router>
//   );
// }

// const fakeAuth = {
//   isAuthenticated: false,
//   authenticate(cb) {
//     this.isAuthenticated = true;
//     setTimeout(cb, 100); // fake async
//   },
//   signout(cb) {
//     this.isAuthenticated = false;
//     setTimeout(cb, 100);
//   }
// };
//
// const AuthButton = withRouter(
//   ({ history }) =>
//     fakeAuth.isAuthenticated ? (
//       <p>
//         Welcome!{" "}
//         <button
//           onClick={() => {
//             fakeAuth.signout(() => history.push("/"));
//           }}
//         >
//           Sign out
//         </button>
//       </p>
//     ) : (
//       <p>You are not logged in.</p>
//     )
// );
//
// function PrivateRoute({ component: Component, ...rest }) {
//   return (
//     <Route
//       {...rest}
//       render={props =>
//         fakeAuth.isAuthenticated ? (
//           <Component {...props} />
//         ) : (
//           <Redirect
//             to={{
//               pathname: "/login",
//               state: { from: props.location }
//             }}
//           />
//         )
//       }
//     />
//   );
// }
//
// function Public() {
//   return <h3>Public</h3>;
// }
//
// function Protected() {
//   return <h3>Protected</h3>;
// }


class MyComponent extends React.Component {
  state = {
    redirect: true
  }
  setRedirect = () => {
    this.setState({
      redirect: false
    })
    return this.state
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/login' />
    } else {
      return <Redirect to='/' />
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
    return (
      <div>
        {this.renderRedirect()}
        <form onSubmit={this.handleSubmit}>
          <label>
            <span>아이디</span>
            <input ref={(c) => { this.id = c; }} />
          </label>
          <label>
            <span>비밀번호</span>
            <input type="password" ref={(c) => { this.password = c; }} />
          </label>
          <button type="button" onClick={this.setRedirect}>로그인</button>
        </form>
      </div>
    )
  }
}

class Login extends Component {
  // state = { redirectToReferrer: false };
  //
  // login = () => {
  //   fakeAuth.authenticate(() => {
  //     this.setState({ redirectToReferrer: true });
  //   });
  // };

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
    let { from } = this.props.location.state || { from: { pathname: "/" } };
    let { redirectToReferrer } = this.state;

    if (redirectToReferrer) return <Redirect to={from} />;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            <span>아이디</span>
            <input ref={(c) => { this.id = c; }} />
          </label>
          <label>
            <span>비밀번호</span>
            <input type="password" ref={(c) => { this.password = c; }} />
          </label>
          <button type="submit" onClick={this.login}>로그인</button>
        </form>

        <p>You must log in to view the page at {from.pathname}</p>
      </div>
    );
  }
}

export default MyComponent;
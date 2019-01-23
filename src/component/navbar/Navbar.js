import React, { Component } from 'react';
import './Navbar.css';
import {NavLink} from 'react-router-dom';
import { Link } from 'react-router-dom';

//상단 메뉴를 가지고 있는 컴포넌트
class Navbar extends Component {
  render() {
    const { user, users } = this.props;
    return (
		<nav>
			<div className="nav-wrapper">
				<a className="brand-logo">VALUESOFT</a>
				<div className="right">
					<ul>
						<li> <h1>{user.firstName}{user.lastName}님</h1></li>
						<li>
							<NavLink to="/"><i className="material-icons">vpn_key</i></NavLink>
						</li>
						<li>
							<Link to="/login"><i className="material-icons">lock_open</i></Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
    );
  }
}

export default Navbar;



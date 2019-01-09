import React, { Component } from 'react';
import './Navbar.css';
import {NavLink} from 'react-router-dom';
import { connect } from 'react-redux';


//상단 메뉴를 가지고 있는 컴포넌트
class Navbar extends Component {
  render() {
    // const { visible } = this.props;
    // if(!visible) return null;

    return (
		<nav>
			<div className="nav-wrapper">
				<a className="brand-logo">VALUESOFT</a>
				<div className="right">
					<ul>
						<li>
							<NavLink to="/"><i className="material-icons">vpn_key</i></NavLink>
						</li>
						<li>
							<a><i className="material-icons">lock_open</i></a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
    );
  }
}

export default Navbar;



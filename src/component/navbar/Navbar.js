import React, { Component } from 'react';
import './Navbar.css';
import {NavLink} from 'react-router-dom';
import { Link } from 'react-router-dom';

//상단 메뉴를 가지고 있는 컴포넌트
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    const { user } = this.props;
    return (

		<nav className="nav-wrapper">
      <span>{this.state.date.toLocaleTimeString()}</span>
			<div className="right">
				<ul>
          <li>
            <i className="material-icons" style={{display:'inline-block',verticalAlign:'middle'}}>
              alarm
            </i>
            <span style={{display:'inline-block',verticalAlign:'middle'}}>출,퇴근시간08:00~17:00 /</span>
          </li>
					<li> <h1>{user.firstName}{user.lastName}님</h1></li>

					<li>
						<NavLink to="/"><i className="material-icons">vpn_key</i></NavLink>
					</li>
					<li>
						<Link to="/login"><i className="material-icons">power_settings_new</i></Link>
					</li>
				</ul>
			</div>
		</nav>
    );
  }
}

export default Navbar;



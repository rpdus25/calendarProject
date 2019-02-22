import React, { Component } from 'react';
import './HomePage.css';
import { connect } from 'react-redux';
import { userActions } from '../../actions/index';
import Navbar from "../../component/navbar/Navbar";
import Calenda2 from "../../container/calenda/Calenda2";
import Annual from "../annual/Annual";


const defaultWorkTime = [
  "08:00 ~ 17:00",
  "09:00 ~ 18:00",
  "10:00 ~ 19:00",
]

// 2019.02.21
class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultWorkTime:defaultWorkTime[0],
      startDate:undefined,
      endDate:undefined,
      defaultDate:new Date(), // 서버에서 받은 오늘 날짜로 수정해야함

      baseAnnual:1, // 기본연차
      addAnnual:8, // 추가연차
      carryForwardAnnual:4, // 이월연차
      remainingAnnual:4, // 남은기본연차
      remainingAddAnnual:4 //남은추가연차
    };
  }

  componentDidMount() {
      this.props.dispatch(userActions.getAll());
  }

  render() {
    const {
      user,
      users,
    } = this.props;
      return (
      <div className="">
        <Navbar
          user={user}
          {...this.state}
        />
        <Annual
          {...this.state}
        />
        <Calenda2
          {...this.state}
        />

        {/*관리자일 경우 */}
        {/*<h3>Users from secure api end point:</h3>*/}
        {/*{users.loading && <em>Loading users...</em>}*/}
        {/*{users.error && <span className="text-danger">ERROR: {users.error}</span>}*/}
        {/*{users.items &&*/}
        {/*<ul>*/}
        {/*{users.items.map((user, index) =>*/}
        {/*<li key={user.id}>*/}
        {/*{user.firstName + ' ' + user.lastName}*/}
        {/*</li>*/}
        {/*)}*/}
        {/*</ul>*/}
        {/*}*/}
      </div>
    );
  }
}

function mapStateToProps(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return {
        user,
        users
    };
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };
import React, { Component } from 'react';
import './HomePage.css';
import { connect } from 'react-redux';
import { userActions } from '../../actions/index';
import Navbar from "../../component/navbar/Navbar";
import Calenda2 from "../../container/calenda/Calenda2";
import Annual from "../annual/Annual";
import isAfter from "date-fns/isAfter";
import getDay from "date-fns/getDay";
import range from "lodash/range";
import getYear from "date-fns/getYear";


const years = range(getYear(new Date()), getYear(new Date()) + 20, 1);
const months = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11
];

const defaultWorkTime = [
  "08:00 ~ 17:00",
  "09:00 ~ 18:00",
  "10:00 ~ 19:00",
]

const insertCommute = [
  "출근",
  "퇴근",
  "추가근무 시작",
  "추가근무 끝",
  "휴일 출근",
  "휴일 퇴근"
]

// 2019.02.21
class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultWorkTime:defaultWorkTime[0], // 기본 출퇴근 시간
      defaultDate:new Date(), // 서버에서 받은 오늘 날짜로 수정해야함

      baseAnnual:1, // 기본연차
      addAnnual:8, // 추가연차
      carryForwardAnnual:4, // 이월연차
      remainingAnnual:4, // 남은기본연차
      remainingAddAnnual:4, // 남은추가연차
      
      insertCommute:insertCommute[0], // 현재 나의 출/퇴근 버튼 상태

      startDate:undefined, // 모달 데이트 피커 시작날짜
      endDate:undefined, // 모달 데이트 피커 종로날짜
      years:years, // 모달 데이트 피커에서 공통으로 쓸 년 select
      months:months, // 모달 데이트 피커에서 공통으로 쓸 달 select
    };
  }

  componentDidMount() {
      this.props.dispatch(userActions.getAll());
  }


  handleInputChange(e) {
    const { value, name } = e.target;
    this.setState({ [name]: value });
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
          handleInputChange={this.handleInputChange}
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
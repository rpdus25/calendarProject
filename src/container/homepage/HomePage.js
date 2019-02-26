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
import events from "../events";
import axios from "axios";
import moment from "moment";
// import api from "../../lib/api.js"
// import {getAPOD} from "../../lib/api";

// 루트 파일!!!

// 모달 데이트 피커에서 공통으로 쓸 년 select
const years = range(getYear(new Date()), getYear(new Date()) + 20, 1);

// 모달 데이트 피커에서 공통으로 쓸 달 select
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

// 기본 출퇴근 시간
const defaultWorkTime = [
  "08:00 ~ 17:00",
  "09:00 ~ 18:00",
  "10:00 ~ 19:00",
]

// 현재 나의 출/퇴근 버튼 상태
const insertCommute = [
  "출근",
  "퇴근",
  "추가근무 시작",
  "추가근무 끝",
  "휴일 출근",
  "휴일 퇴근"
]

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

      events:events,
      desc:'개인 사정',
      selected: '연차',
    };
  }

  // holidayList = async () => {
  //   try {
  //     const response = await axios.get("http://local.vss.projectmanagement.co.kr:8093/selectAdminAddHolidayList");
  //     console.log(response.data.data);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };


  componentDidMount() {
    this.props.dispatch(userActions.getAll());
    axios.get("http://local.vss.projectmanagement.co.kr:8093/selectAdminAddHolidayList")
      .then(res =>
        // console.log(res.data.data)

      res.data.data.map((i) => {
        console.log(res.data.data)
        // this.setState({
        //   events: [
        //     ...events,
        //     {
        //       id: res.data.data.holidayIdno,
        //       'start': new Date(res.data.data.date),
        //       'end':new Date(res.data.data.date),
        //       title:res.data.data.name,
        //     }
        //   ]
        // })
      })

    );
  }




  // this.setState({
  //   events: [
  //     ...events,
  //     {
  //       id: res.data.data[1].holidayIdno,
  //       'start': new Date(res.data.data[1].date),
  //       'end':new Date(res.data.data[1].date),
  //       title:res.data.data[1].name,
  //     }
  //   ]
  // })



  // handleInputChange(e) {
  //   const { value, name } = e.target;
  //   this.setState({ [name]: value });
  // }

  // 데이트 피커 주말 계산
  isWeekday = date => {
    const day = getDay(date);
    return day !== 0 && day !== 6;
  };

  // 최초 달력에 입력한 내용들을 저장
  save = (writingState) => {
    const events = this.state.events;
    let lastNoteId =  events[events.length-1].id;

    this.setState({
      events: [
        ...events,
        //content 안에 userInput을 넣어야, content로 저장이 됩니다.
        {
          id: ++lastNoteId,
          'title': writingState.selected,
          'start': writingState.startDate,
          'end': writingState.endDate,
          desc : writingState.desc
        }
      ]
    })
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
          isWeekday={this.isWeekday}
        />
        <Calenda2
          {...this.state}
          save={this.save}
          isWeekday={this.isWeekday}
          holidayList={this.holidayList}
        />
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
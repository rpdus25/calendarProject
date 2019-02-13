import React, { Component } from "react";
import { render } from "react-dom";
import events from "../events";
import BigCalendar from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
const localizer = BigCalendar.momentLocalizer(moment) // or globalizeLocalizer


moment.locale('ko');
moment().format('LT');   // 오후 11시 42분
moment().format('LTS');  // 오후 11시 42분 57초
moment().format('L');    // 2016.10.11
moment().format('l');    // 2016.10.11
moment().format('LL');   // 2016년 10월 11일
moment().format('ll');   // 2016년 10월 11일
moment().format('LLL');  // 2016년 10월 11일 오후 11시 42분
moment().format('lll');  // 2016년 10월 11일 오후 11시 42분
moment().format('LLLL'); // 2016년 10월 11일 화요일 오후 11시 42분
moment().format('llll'); // 2016년 10월 11일 화 오후 11시 42분

class Calenda2 extends React.Component {
  state = {
    view: "month",
    date: new Date(2019, 2, 13),
    width:"100%"
  };

  componentDidMount() {
    window.addEventListener("resize", () => {
      /*this.setState({
        width: window.innerWidth,
        height: window.innerHeight
      });*/
    });
  }

  render() {
    return (
      <div style={{ height:"calc(100vh - 200px)" }}>
        <button onClick={() => this.setState({ view: "day" })}>Day</button>
        <button onClick={() => this.setState({ view: "month" })}>Month</button>
        <BigCalendar
          localizer={localizer}
          style={{ height:"100%", width: this.state.width }}
          toolbar={false}
          events={events}
          step={60}
          // views={allViews}
          view={this.state.view}
          onView={() => {}}
          date={this.state.date}
          onNavigate={date => this.setState({ date })}
        />
      </div>
    );
  }
}

export default Calenda2;
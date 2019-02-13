import React, { Component } from "react";
import { render } from "react-dom";
import events from "../events";
import BigCalendar from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

moment.locale("en");
// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
const localizer = BigCalendar.momentLocalizer(moment) // or globalizeLocalizer

class Calenda2 extends React.Component {
  state = {
    view: "day",
    date: new Date(2015, 3, 12),
    width: 500
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
      <div style={{ height: 700 }}>
        <button onClick={() => this.setState({ view: "day" })}>Day</button>
        <button onClick={() => this.setState({ view: "month" })}>Month</button>
        <BigCalendar
          localizer={localizer}
          style={{ height: 500, width: this.state.width }}
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
import React, { Component } from "react";
import { render } from "react-dom";
import events from "../events";
import BigCalendar from "react-big-calendar";
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop'
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';
// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
const localizer = BigCalendar.momentLocalizer(moment) // or globalizeLocalizer
const DraggableCalendar = withDragAndDrop(BigCalendar)

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

class Calenda2 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      view  : "month",
      date  : new Date(2019, 2, 13),
      width : "100%",
      events: events
    }

    this.moveEvent = this.moveEvent.bind(this)
    this.newEvent = this.newEvent.bind(this)
  }

  componentDidMount() {
    window.addEventListener("resize", () => {
      /*this.setState({
        width: window.innerWidth,
        height: window.innerHeight
      });*/
    });
  }


  moveEvent({ event, start, end, isAllDay: droppedOnAllDaySlot }) {
    const { events } = this.state

    const idx = events.indexOf(event)
    let allDay = event.allDay

    if (!event.allDay && droppedOnAllDaySlot) {
      allDay = true
    } else if (event.allDay && !droppedOnAllDaySlot) {
      allDay = false
    }

    const updatedEvent = { ...event, start, end, allDay }

    const nextEvents = [...events]
    nextEvents.splice(idx, 1, updatedEvent)

    this.setState({
      events: nextEvents,
    })

    // alert(`${event.title} was dropped onto ${updatedEvent.start}`)
  }

  resizeEvent = ({ event, start, end }) => {
    const { events } = this.state

    const nextEvents = events.map(existingEvent => {
      return existingEvent.id == event.id
        ? { ...existingEvent, start, end }
        : existingEvent
    })

    this.setState({
      events: nextEvents,
    })

    //alert(`${event.title} was resized to ${start}-${end}`)
  }

  newEvent(event) {
    // let idList = this.state.events.map(a => a.id)
    // let newId = Math.max(...idList) + 1
    // let hour = {
    //   id: newId,
    //   title: 'New Event',
    //   allDay: event.slots.length == 1,
    //   start: event.start,
    //   end: event.end,
    // }
    // this.setState({
    //   events: this.state.events.concat([hour]),
    // })
  }
  render() {
    return (
      <div style={{ height:"calc(100vh - 200px)" }}>
        <button onClick={() => this.setState({ view: "day" })}>Day</button>
        <button onClick={() => this.setState({ view: "month" })}>Month</button>
        <DraggableCalendar
          localizer={localizer}
          style={{ height:"100%", width: this.state.width }}
          toolbar={false}
          events={this.state.events}
          onEventDrop={this.moveEvent}
          step={60}
          // views={allViews}
          view={this.state.view}
          onView={() => {}}
          date={this.state.date}
          onNavigate={date => this.setState({ date })}
          draggableAccessor={event => true}
          resizable
          onEventResize={this.resizeEvent}
          onSelectSlot={this.newEvent}
          selectable
        />
      </div>
    );
  }
}

export default Calenda2;
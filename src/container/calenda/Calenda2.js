import React, { Component } from "react";
// import { render } from "react-dom";
import events from "../events";
import BigCalendar from "react-big-calendar";
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';
// import Modal from 'react-modal';
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';
import AnnualManagement from "../../component/modal/annualmanagement/AnnualManagement"

// Setup the localizer by providing the moment (or globalize) Object
const localizer = BigCalendar.momentLocalizer(moment);
const DraggableCalendar = withDragAndDrop(BigCalendar);
const DEFAULT_TITLE = '연차관리';
const propTypes = {}

class Calenda2 extends Component {
  // constructor(props) {
  //   super(props);
  constructor(props) {
    super(props);
    this.state = {
      events:events,
      showModal: false,
      title: DEFAULT_TITLE,
      currentModal: null
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal (event) {
    this.setState({
      showModal: true,
      title:event.title
    });
  }

  handleCloseModal () {
    this.setState({
      showModal: false,
      title: DEFAULT_TITLE,
    });
  }

  handleSelect = ({ start, end }) => {
    const title = "";
    // const title = window.prompt('New Event name');
    if ({showModal: true})
      this.setState({
        title: DEFAULT_TITLE,
        showModal: true,
        events: [
          ...this.state.events,
          {
            start,
            end,
            title,
          },
        ],
      })
  }

  handleInputChange = e => {
    let text = e.target.value;
    if (text == '') {
      text = DEFAULT_TITLE;
    }
    this.setState({
      ...this.state,
      title: text
    });
  }

  toggleModal = key => event => {
    event.preventDefault();
    console.log("toggleModal");
    if (this.state.currentModal) {
      this.handleModalCloseRequest();
      return;
    }

    this.setState({
      ...this.state,
      currentModal: key,
      title: DEFAULT_TITLE
    });
  }

  handleOnAfterOpenModal = () => {
    // when ready, we can access the available refs.
    this.heading && (this.heading.style.color = '#F00');
  }

  render() {
    const { currentModal } = this.state;

    return (
      <div style={{ height:"calc(100vh - 200px)" }}>
        <BigCalendar
          popup
          selectable
          localizer={localizer}
          events={this.state.events}
          defaultView={BigCalendar.Views.MONTH}
          scrollToTime={new Date(1970, 1, 1, 6)}
          defaultDate={new Date()}
          onSelectEvent={
            this.handleOpenModal
            // event => alert(event.title)
          }
          onSelectSlot={this.handleSelect}
        />

        <AnnualManagement
          title={this.state.title}
          isOpen={this.state.showModal}
          onAfterOpen={this.handleOnAfterOpenModal}
          onRequestClose={this.handleCloseModal}
          askToClose={this.handleCloseModal}
          onChangeInput={this.handleInputChange}
          // onRequestClose={this.handleModalCloseRequest}
        />

      </div>
    )
  }
}

// Calenda2.propTypes = propTypes

// moment.locale('ko');
// moment().format('LT');   // 오후 11시 42분
// moment().format('LTS');  // 오후 11시 42분 57초
// moment().format('L');    // 2016.10.11
// moment().format('l');    // 2016.10.11
// moment().format('LL');   // 2016년 10월 11일
// moment().format('ll');   // 2016년 10월 11일
// moment().format('LLL');  // 2016년 10월 11일 오후 11시 42분
// moment().format('lll');  // 2016년 10월 11일 오후 11시 42분
// moment().format('LLLL'); // 2016년 10월 11일 화요일 오후 11시 42분
// moment().format('llll'); // 2016년 10월 11일 화 오후 11시 42분

//
// const { onDrillDown } = this.props;
// if (onDrillDown) {
//   onDrillDown(date, view, this.drilldownView)
// }

// class Calenda2 extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       date  : new Date(2019, 2, 14),
//       width : "100%",
//       events: events,
//       isModalOpen: 0
//     }
//
//     this.moveEvent = this.moveEvent.bind(this)
//     this.newEvent = this.newEvent.bind(this)
//   }
//
//   componentDidMount() {
//     window.addEventListener("resize", () => {
//       /*this.setState({
//         width: window.innerWidth,
//         height: window.innerHeight
//       });*/
//     });
//   }
//
//
//   moveEvent({ event, start, end, isAllDay: droppedOnAllDaySlot }) {
//     const { events } = this.state
//
//     const idx = events.indexOf(event)
//     let allDay = event.allDay
//
//     if (!event.allDay && droppedOnAllDaySlot) {
//       allDay = true
//     } else if (event.allDay && !droppedOnAllDaySlot) {
//       allDay = false
//     }
//
//     const updatedEvent = { ...event, start, end, allDay }
//
//     const nextEvents = [...events]
//     nextEvents.splice(idx, 1, updatedEvent)
//
//     this.setState({
//       events: nextEvents,
//     })
//
//     // alert(`${event.title} was dropped onto ${updatedEvent.start}`)
//   }
//
//   resizeEvent = ({ event, start, end }) => {
//     const { events } = this.state
//
//     const nextEvents = events.map(existingEvent => {
//       return existingEvent.id == event.id
//         ? { ...existingEvent, start, end }
//         : existingEvent
//     })
//
//     this.setState({
//       events: nextEvents,
//     })
//
//     //alert(`${event.title} was resized to ${start}-${end}`)
//   }
//
//   newEvent(event) {
//     // let idList = this.state.events.map(a => a.id)
//     // let newId = Math.max(...idList) + 1
//     // let hour = {
//     //   id: newId,
//     //   title: 'New Event',
//     //   allDay: event.slots.length == 1,
//     //   start: event.start,
//     //   end: event.end,
//     // }
//     // this.setState({
//     //   events: this.state.events.concat([hour]),
//     // })
//   }
//   render() {
//     return (
//       <div style={{ height:"calc(100vh - 200px)" }}>
//
//         <button onClick={() => this.setState({ view: "day" })}>Day</button>
//         <button onClick={() => this.setState({ view: "month" })}>Month</button>
//         {/*<DraggableCalendar*/}
//           {/*localizer={localizer}*/}
//           {/*style={{ height:"100%", width: this.state.width }}*/}
//           {/*selectable*/}
//           {/*events={this.state.events}*/}
//           {/*onEventDrop={this.moveEvent}*/}
//           {/*// resizable*/}
//           {/*// onEventResize={this.resizeEvent}*/}
//           {/*onSelectSlot={this.newEvent}*/}
//           {/*defaultView={BigCalendar.Views.MONTH}*/}
//           {/*defaultDate={this.state.date}*/}
//           {/*popup={false}*/}
//           {/*open={this.state.isModalOpen}*/}
//           {/*onClose={this.handleClose}*/}
//           {/*components={{*/}
//             {/*event: CustomEvent*/}
//           {/*}}*/}
//         {/*/>*/}
//         <Selectable/>
//       </div>
//     );
//   }
// }

export default Calenda2;
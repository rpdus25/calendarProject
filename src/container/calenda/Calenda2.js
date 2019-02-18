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
import isAfter from "date-fns/isAfter";


// Setup the localizer by providing the moment (or globalize) Object
const localizer = BigCalendar.momentLocalizer(moment);
const DraggableCalendar = withDragAndDrop(BigCalendar);
const DEFAULT_TITLE = '연차관리';
const propTypes = {}


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






/*Agenda Rendering*/
//Outside the class
// function Event({ event }) {
//   return (
//     <span>
//       <strong>
//       {event.title}
//       </strong>
//       { event.desc && (':  ' + event.desc)}
//     </span>
//   )
// }
//
// function EventAgenda({ event }) {
//   return <span>
//     <em style={{ color: 'magenta'}}>{event.title}</em><p>{ event.desc }</p>
//       </span>
// }

class Calenda2 extends Component {
  // constructor(props) {
  //   super(props);
  constructor(props) {
    super(props);
    this.state = {
      events:events,
      showModal: false,
      title: DEFAULT_TITLE,
      currentModal: null,
      desc:"개인사정",
      startDate:undefined,
      endDate:undefined,
      selected: '연차',
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleChangeStart = this.handleChangeStart.bind(this);
    this.handleChangeEnd = this.handleChangeEnd.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);
  }

  // 이벤트 내용 있는 것 클릭했을때
  handleOpenModal (e) {
    if(e.title === '연차') {
      console.log()
      console.log('dd');
    }
    this.setState({
      showModal: true,
      title:e.title,
      desc:e.desc,
      startDate:e.start,
      endDate:e.end
    });
  }

  handleCloseModal () {
    this.setState({
      showModal: false
    });
  }

  handleSelect = ({ start, end }) => {
    const title = "";

    const startDate = start;
    // const title = window.prompt('New Event name');
    if ({showModal: true})
      this.setState({
        title: DEFAULT_TITLE,
        startDate: start,
        endDate: end,
        showModal: true,
        events: [
          ...this.state.events,
          {
            title,
            start,
            end
          },
        ],
      })
  }

  handleInputChange = (e) => {
    this.setState({
      desc: e.target.value
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

  /* When you choose a particular slot on the calendar */
  onSlotChange(slotInfo) {
    var startDate = moment(slotInfo.start.toLocaleString()).format("YYYY-MM-DDm:ss");
    var endDate = moment(slotInfo.end.toLocaleString()).format("YYYY-MM-DDm:ss");
    console.log('startTimetartDate); //shows the start time chosen');
    console.log('endTimendDate); //shows the end time chosen');
  }

  /* When you click on an already booked slot */
  onEventClick(event) {
    console.log(event) //Shows the event details provided while booking
  }


  // 데이트피커
  handleChange = ({ startDate, endDate }) => {
    startDate = startDate || this.state.startDate;
    endDate = endDate || this.state.endDate;

    if (isAfter(startDate, endDate)) {
      endDate = startDate;
    }

    this.setState({ startDate, endDate });
  };

  handleChangeStart = startDate => this.handleChange({ startDate });
  handleChangeEnd = endDate => this.handleChange({ endDate });

  // 라디오 버튼 체인지
  handleOptionChange = (e) => {
    this.setState({
      selected: e.target.value
    });
  }




  // 이벤트마다 다른것
  eventStyleGetter = (event, start, end, isSelected) => {
    if(event.title === '연차') {
      const backgroundColor = '#ffc000';
      const style = {
        backgroundColor: backgroundColor
      };
      return {
        style: style
      };
    } else if (event.title === '오전 반차') {
      const backgroundColor = '#00b0f0';
      const style = {
        backgroundColor: backgroundColor
      };
      return {
        style: style
      };
    } else if (event.title === '오후 반차') {
      const backgroundColor = '#7030a0';
      const style = {
        backgroundColor: backgroundColor
      };
      return {
        style: style
      };
    } else if (event.title === '출근') {
      const backgroundColor = '#00823b';
      const style = {
        backgroundColor: backgroundColor
      };
      return {
        style: style
      };
    } else if (event.title === '무단결근') {
      const backgroundColor = '#ff0000';
      const style = {
        backgroundColor: backgroundColor
      };
      return {
        style: style
      };
    } else if (event.title === '외출') {
      const backgroundColor = '#808080';
      const style = {
        backgroundColor: backgroundColor
      };
      return {
        style: style
      };
    }
    


  }












  render() {
    // const { currentModal } = this.state;

    return (
      <div style={{ height:"calc(100vh - 200px)" }}>
        <BigCalendar
          popup
          selectable
          localizer={localizer}
          events={this.state.events}
          // views={allViews}
          defaultView={BigCalendar.Views.MONTH}
          scrollToTime={new Date(1970, 1, 1, 6)}
          defaultDate={new Date()}
          onSelectEvent={this.handleOpenModal} // event => alert(event.title)
          onSelectSlot={this.handleSelect}
          eventPropGetter={(this.eventStyleGetter)}
          // components={{
          //   event: Event,
          //   agenda: {
          //     event: EventAgenda
          //   }
          // }}

        />

        <AnnualManagement
          title={this.state.title}
          desc={this.state.desc}
          start={this.state.start}
          startDate = {this.state.startDate}
          endDate = {this.state.endDate}
          isOpen={this.state.showModal}
          events={this.state.events}
          onAfterOpen={this.handleOnAfterOpenModal}
          onRequestClose={this.handleCloseModal}
          askToClose={this.handleCloseModal}
          onChangeInput={this.handleInputChange}
          onChangeInputStart={this.handleChangeStart}
          onChangeInputEnd={this.handleChangeEnd}
          onChangeHandleOption={this.handleOptionChange}
          selected={this.state.selected}
          isShow={this.toggle}
          // onRequestClose={this.handleModalCloseRequest}
        />

      </div>
    )
  }
}

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
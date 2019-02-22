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
import getDay from "date-fns/getDay";


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
      defaultDate:new Date() // 서버에서 받은 오늘 날짜로 수정해야함
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleChangeStart = this.handleChangeStart.bind(this);
    this.handleChangeEnd = this.handleChangeEnd.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);
  }

  // 캘린더에서 이벤트 내용 있는 것 클릭했을때
  handleOpenModal (e) {
    if(e.title === '연차') {
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

  // 캘린더 드래그해서 select할때
  handleSelect = ({ start, end }) => {
    if(start < this.state.defaultDate || end < this.state.defaultDate ) {
      if(start.getDate() === this.state.defaultDate.getDate()) {
        console.log('오늘');
      } else {
        alert('오늘 이후 날짜만 선택 가능합니다.');
        return false;
      }
    }

    if(!(start.getDay() === 0 || start.getDay() === 6 || end.getDay() === 0 || end.getDay() === 6) ) {
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
              // start,
              // end
            },
          ],
        });
    } else {
      alert("휴일은 입력이 불가능합니다.");
    }
  }

  handleInputChange = (e) => {
    this.setState({
      desc: e.target.value
    });
  };

  // 모달 닫기
  handleCloseModal () {
    this.setState({
      showModal: false
    });
  }

  // toggleModal = key => event => {
  //   event.preventDefault();
  //   console.log("toggleModal");
  //   if (this.state.currentModal) {
  //     this.handleModalCloseRequest();
  //     return;
  //   }
  //
  //   this.setState({
  //     ...this.state,
  //     currentModal: key,
  //     title: DEFAULT_TITLE
  //   });
  // }

  handleOnAfterOpenModal = () => {
    // when ready, we can access the available refs.
    this.heading && (this.heading.style.color = '#F00');
  }

  /* When you choose a particular slot on the calendar */
  // onSlotChange(slotInfo) {
  //   var startDate = moment(slotInfo.start.toLocaleString()).format("YYYY-MM-DDm:ss");
  //   var endDate = moment(slotInfo.end.toLocaleString()).format("YYYY-MM-DDm:ss");
  //   console.log('startTimetartDate); //shows the start time chosen');
  //   console.log('endTimendDate); //shows the end time chosen');
  // }
  //
  // /* When you click on an already booked slot */
  // onEventClick(event) {
  //   console.log(event) //Shows the event details provided while booking
  // }


  // 모달 내부 데이트 피커
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


  // 모달 내부 라디오 버튼 체인지
  handleOptionChange = (e) => {
    this.setState({
      selected: e.target.value
    });
  }

  // 이벤트마다 색표시 다르게
  eventStyleGetter = (event, start, end, isSelected) => {
    if(event.title === '연차') {
      return {
        className:"yellow"
      };
    } else if (event.title === '오전 반차') {
      return {
        className:"blue"
      };
    } else if (event.title === '오후 반차') {
      return {
        className:"purple"
      };
    } else if (event.title === '출근') {
      return {
        className:"green"
      };
    } else if (event.title === '무단결근') {
      return {
        className:"red"
      };
    } else if (event.title === '외출') {
      return {
        className:"gray"
      };
    } else if (event.title === '야근') {
      return {
        className:"lightblue"
      };
    } else if (event.title === '강제 야근') {
      return {
        className:"black"
      };
    }
  }

  // 모달 내부 전송
  handleSubmit = (e) => {
    e.preventDefault();
    console.log('submitted');
    console.log(this.state.endDate);
    this.setState({
      showModal: false,
      endDate : this.state.endDate.setHours(20,21,22)
    });
    this.save(this.state);
  };

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
    // const { currentModal } = this.state;
    return (
      <div style={{ height:"calc(100vh - 102px)" }}>
        <BigCalendar
          popup
          selectable
          localizer={localizer}
          events={this.state.events}
          // views={allViews}
          defaultView={BigCalendar.Views.MONTH}
          scrollToTime={new Date(1970, 1, 1, 6)}
          defaultDate={this.state.defaultDate}
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
          {...this.props}
          onSubmit={this.handleSubmit}
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
          defaultDate={this.state.defaultDate}
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
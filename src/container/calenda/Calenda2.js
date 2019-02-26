import React, { Component } from "react";
// import { render } from "react-dom";

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

class Calenda2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      events:this.props.events,
      title: DEFAULT_TITLE,
      currentModal: null,
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

  // 캘린더 드래그해서 select할때 (재수정해야함)
  handleSelect = ({ start, end }) => {
    if(start < this.props.defaultDate || end < this.props.defaultDate ) {
      if(start.getDate() === this.props.defaultDate.getDate()) {
        console.log('오늘');
      } else {
        alert('오늘 이후 날짜만 선택 가능합니다.');
        return false;
      }
    }

    if(!(start.getDay() === 0 || start.getDay() === 6 || end.getDay() === 0 || end.getDay() === 6) ) {
      const title = "";
      const desc = "";
      // const title = window.prompt('New Event name');
      if ({showModal: true})
        this.setState({
          title: DEFAULT_TITLE,
          desc: this.props.desc,
          startDate: start,
          endDate: end,
          showModal: true,
          events: [
            ...this.props.events,
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



  // handleOnAfterOpenModal = () => {
  //   this.setState({
  //     desc:""
  //   });
  // }



  // 모달 닫기
  handleCloseModal () {
    this.setState({
      showModal: false,
    });
  }

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

  // 큰 달력에서만 쓰는 기능 : 이벤트마다 색표시 다르게
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

    if (event.holiday) {
      return {
        className:"holiday"
      }
    }
  }

  // 모달 내부 전송
  handleSubmit = (e) => {
    e.preventDefault();
    console.log('submitted');

    this.setState({
      showModal: false,
      endDate : this.state.endDate.setHours(20,21,22)
    });
    this.props.save(this.state);
  };


  // 캘린더에서 이벤트 내용 있는 것 클릭했을때
  handleOpenModal (e) {
    if(e.title === '연차') {
      console.log('dd');
    }

    console.log(e.desc);

    this.setState({
      showModal: true,
      title:e.title,
      desc:e.desc,
      startDate:e.start,
      endDate:e.end
    });
  }

  // 사유 눌러서 수정
  handleInputChange = (e) => {
    this.setState({
      desc: e.target.value
    });
  };

  componentDidMount() {

  }

  render() {
    // const { currentModal } = this.state;
    return (
      <div style={{ height:"calc(100vh - 102px)" }}>
        <BigCalendar
          {...this.props}
          popup
          selectable
          localizer={localizer}
          defaultView={BigCalendar.Views.MONTH}
          scrollToTime={new Date(1970, 1, 1, 6)}
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
          desc={this.state.desc}
          title={this.state.title}
          start={this.state.start}
          startDate = {this.state.startDate}
          endDate = {this.state.endDate}
          isOpen={this.state.showModal}
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

export default Calenda2;
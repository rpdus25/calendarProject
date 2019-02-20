import React, { Component } from 'react';
import DefaultWorkTimeChange from '../defaultworktimechage/DefaultWorkTimeChange';
import '../modal.css';
import moment from "moment";
import isAfter from "date-fns/isAfter";
import getDay from "date-fns/getDay";
import DatePicker from "react-datepicker";
import range from "lodash/range";
import getYear from "date-fns/getYear";
import getMonth from "date-fns/getMonth";

const MODAL_B = 'modal_b';
const DEFAULT_TITLE = 'Default title';

const years = range(1990, getYear(new Date()) + 1, 1);
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

class DefaultWorkTimeChangeModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title1: DEFAULT_TITLE,
      currentModal: null,
      showModal: false,
      startDate:undefined,
      endDate:undefined,
      defaultDate:new Date() // 서버에서 받은 오늘 날짜로 수정해야함
    };
  }

  toggleModal = key => event => {
    event.preventDefault();
    if (this.state.currentModal) {
      this.handleModalCloseRequest();
      return;
    }

    this.setState({
      ...this.state,
      currentModal: key,
      title1: DEFAULT_TITLE
    });
  }

  handleModalCloseRequest = () => {
    // opportunity to validate something and keep the modal open even if it
    // requested to be closed
    this.setState({
      ...this.state,
      currentModal: null
    });
  }

  handleInputChange = e => {
    let text = e.target.value;
    if (text == '') {
      text = DEFAULT_TITLE;
    }
    this.setState({ ...this.state, title1: text });
  }

  handleOnAfterOpenModal = () => {
    // when ready, we can access the available refs.
    this.heading && (this.heading.style.color = '#F00');
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

  handleChange = date => {
    this.setState({
      startDate: date
    });
  };
  
  // 주말 및 오늘은 제외한 기본 근무 시간 변경 달력 표시
  isWeekday = date => {
    const day = getDay(date);
    return day !== 0 && day !== 6 && date > this.state.defaultDate;
  };

  render() {
    const { currentModal } = this.state;

    return (
      <div>
        <button type="button" className="btn btn-primary" onClick={this.toggleModal(MODAL_B)}>기본 근무 시간 변경</button>
        <DefaultWorkTimeChange
          title={this.state.title1}
          isOpen={currentModal == MODAL_B}
          onAfterOpen={this.handleOnAfterOpenModal}
          onRequestClose={this.handleModalCloseRequest}
          askToClose={this.toggleModal(MODAL_B)}
          onSubmit={this.handleSubmit}
          desc={this.state.desc}
          start={this.state.start}
          startDate = {this.state.startDate}
          endDate = {this.state.endDate}
          events={this.state.events}
          onChange={this.handleChange}
          // onChangeInput={this.handleInputChange}
          // onChangeInputStart={this.handleChangeStart}
          // onChangeInputEnd={this.handleChangeEnd}
          onChangeHandleOption={this.handleOptionChange}
          selected={this.state.selected}
          isShow={this.toggle}
          defaultDate={this.state.defaultDate}
          isWeekday={this.isWeekday}
          years={years}
          months={months}
        />
      </div>
    );
  }
}

export default {
  app: DefaultWorkTimeChangeModal
};

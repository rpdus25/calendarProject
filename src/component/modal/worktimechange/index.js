import React, { Component } from 'react';
import WorkTimeChange from '../worktimechange/WorkTimeChange';
import '../modal.css';
import moment from "moment";
import isAfter from "date-fns/isAfter";
import getDay from "date-fns/getDay";
import DatePicker from "react-datepicker";
import range from "lodash/range";
import getYear from "date-fns/getYear";
import getMonth from "date-fns/getMonth";

const MODAL_C = 'modal_c';

class WorkTimeChangeModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentModal: null,
      showModal: false,
      startDate:undefined,
      endDate:undefined,
      defaultDate:new Date() // 서버에서 받은 오늘 날짜로 수정해야함
    };

    this.handleChangeStart = this.handleChangeStart.bind(this);
    this.handleChangeEnd = this.handleChangeEnd.bind(this);
  }

  toggleModal = key => event => {
    event.preventDefault();
    if (this.state.currentModal) {
      this.handleModalCloseRequest();
      return;
    }

    this.setState({
      ...this.state,
      startDate:undefined,
      endDate:undefined,
      currentModal: key,
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

  handleChangeStart = startDate => this.handleChange({ startDate });
  handleChangeEnd = endDate => this.handleChange({ endDate });

  // 주말 및 오늘은 제외한 기본 근무 시간 변경 달력 표시
  isWeekday = date => {
    const day = getDay(date);
    return day !== 0 && day !== 6 && date > this.state.defaultDate;
  };

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
    const { currentModal } = this.state;

    return (
      <div>
        <button type="button" className="btn btn-primary" onClick={this.toggleModal(MODAL_C)}>근무 시간 변경</button>
        <WorkTimeChange
          {...this.props}

          isOpen={currentModal == MODAL_C}
          onAfterOpen={this.handleOnAfterOpenModal}
          onRequestClose={this.handleModalCloseRequest}
          askToClose={this.toggleModal(MODAL_C)}
          onSubmit={this.handleSubmit}
          start={this.state.start}
          startDate = {this.state.startDate}
          endDate = {this.state.endDate}
          events={this.state.events}
          onChangeInputStart={this.handleChangeStart}
          selected={this.state.selected}
          isShow={this.toggle}
          defaultDate={this.state.defaultDate}
          isWeekday={this.isWeekday}
        />

        {/* 그냥 모달로 추가했을 때 수정 */}
        {/*<Modal*/}
          {/*style={{*/}
            {/*overlay: {*/}
              {/*position: 'fixed',*/}
              {/*top: 0,*/}
              {/*left: 0,*/}
              {/*right: 0,*/}
              {/*bottom: 0,*/}
              {/*display: 'flex',*/}
              {/*justifyContent: 'center',*/}
              {/*alignItems: 'center',*/}
              {/*backgroundColor: 'rgba(0, 0, 0, 0.75)'*/}
            {/*},*/}
            {/*content: {*/}
              {/*position: 'static',*/}
              {/*width:'400px',*/}
              {/*height:'200px',*/}
              {/*margin:'0 auto',*/}
              {/*background: '#fff',*/}
              {/*overflow: 'auto',*/}
              {/*WebkitOverflowScrolling: 'touch',*/}
              {/*borderRadius: '4px',*/}
              {/*outline: 'none',*/}
              {/*padding: '20px'*/}
            {/*}*/}
          {/*}}*/}
          {/*ref="mymodal3"*/}
          {/*id="test3"*/}
          {/*aria={{*/}
            {/*labelledby: "heading",*/}
            {/*describedby: "fulldescription"*/}
          {/*}}*/}
          {/*closeTimeoutMS={150}*/}
          {/*contentLabel="modalC"*/}
          {/*isOpen={currentModal == MODAL_C}*/}
          {/*shouldCloseOnOverlayClick={true}*/}
          {/*onAfterOpen={this.handleOnAfterOpenModal}*/}
          {/*onRequestClose={this.toggleModal(MODAL_C)}>*/}
          {/*<h1 id="heading" ref={h1 => this.heading = h1}>근무 시간 변경</h1>*/}
          {/*<button onClick={this.toggleModal(MODAL_C)}>close</button>*/}
          {/*<div id="fulldescription" tabIndex="0" role="document" style={{outline:"none"}}>*/}
            {/*<dl className="list-wrap">*/}
              {/*<dt>날짜 :</dt>*/}
              {/*<dd>*/}
                {/*<i className="material-icons">date_range</i>*/}
                {/*<input type="date"/>*/}
              {/*</dd>*/}
            {/*</dl>*/}
            {/*<dl className="list-wrap">*/}
              {/*<dt>출/퇴근 시간:</dt>*/}
              {/*<dd>*/}
                {/*<select name="" id="" >*/}
                  {/*<option value="0">08:00 ~ 17:00</option>*/}
                  {/*<option value="1">09:00 ~ 18:00</option>*/}
                  {/*<option value="2">10:00 ~ 19:00</option>*/}
                  {/*<option value="3">10:00 ~ 17:00</option>*/}
                {/*</select>*/}
              {/*</dd>*/}
            {/*</dl>*/}
            {/*<button className="btn btn-primary">저장</button>*/}

          {/*</div>*/}
        {/*</Modal>*/}
      </div>
    );
  }
}

export default {
  app: WorkTimeChangeModal
};

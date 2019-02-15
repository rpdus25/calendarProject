import React, { Component } from 'react';
import './Calenda.css';
import Modal from 'react-modal';
import MonthChange from '../../component/modal/monthchange/MonthChange'



const MODAL_A = 'modal_a';
const MODAL_B = 'modal_b';
const DEFAULT_TITLE = 'Default title';




class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // date: new Date(),
      title1: DEFAULT_TITLE,
      currentModal: null
    }
  };

  // getMothName = (number) => {
  //   const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  //   return months[number];
  // }
  //
  // getLastDate = (number) => {
  //   const lastDates = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  //   if(number === -1) {
  //     number = 12-1;
  //   }
  //   if((this.state.date.getFullYear() % 4 === 0 &&
  //     this.state.date.getFullYear() % 100 !== 0) ||
  //     this.state.date.getFullYear() % 400 === 0 ) {
  //     lastDates[1] = 29;
  //   }
  //   return lastDates[number];
  // }
  //
  // getDayName = (number) => {
  //   const days = ['일', '월', '화', '수', '목', '금', '토'];
  //   return days[number];
  // }
  //
  // createTable = () => {
  //   let dateNum =  1 - new Date(this.state.date.getFullYear(),this.state.date.getMonth(),1).getDay();
  //   let currentLastDate = this.getLastDate(this.state.date.getMonth());
  //   let prevLastDate = this.getLastDate(this.state.date.getMonth() -1);
  //   let week = Math.ceil( (this.getLastDate(this.state.date.getMonth() -1) ) / 7 );
  //
  //   const table = [];
  //   // Outer loop to create parent
  //   for (let i = 0; i < week; i++) {
  //     let children = [];
  //     //Inner loop to create children
  //     for (let j = 0; j < 7; j++, dateNum++) {
  //       if(dateNum < 1) {
  //         children.push(<div className="flex-item"><span className="calendar-num disabled">{prevLastDate - Math.abs(dateNum)}</span></div>);
  //       }else if(dateNum > currentLastDate) {
  //         children.push(<div className="flex-item"><span className="calendar-num disabled">{Math.abs(currentLastDate - dateNum)}</span></div>);
  //       }else {
  //         if(dateNum === this.state.date.getDate()) {
  //           children.push(<div className="flex-item"><span className="calendar-num calendar-today">{dateNum}</span></div>);
  //         } else {
  //           children.push(<div className="flex-item"><span className="calendar-num">{dateNum}</span></div>);
  //         }
  //       }
  //     }
  //     //Create the parent and add the children
  //     table.push(<div className="flex-row">{children}</div>)
  //   }
  //   return table;
  // }

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

  render() {
    const { currentModal } = this.state;
    // Get current date
    // let today = new Date();
    // If it is weekday
    // if (today === 6 || today === 0)
    //   return <div>{this.getDayName(today)}</div>;
    // If it is weeken
    return <div className="calendar-wrap">
      <div className="calendar-top">
        <div></div>
        <div className="calendar-top-tit">
          <button><i className="material-icons">navigate_before</i></button>
          <div className="calender-month">
            {/*<button  onClick={this.toggleModal(MODAL_A)}>{(this.state.date.getFullYear())}년</button>*/}
            <MonthChange
              title={this.state.title1}
              isOpen={currentModal == MODAL_A}
              onAfterOpen={this.handleOnAfterOpenModal}
              onRequestClose={this.handleModalCloseRequest}
              askToClose={this.toggleModal(MODAL_A)}
              onChangeInput={this.handleInputChange}
            />

            {/*<button onClick={this.toggleModal}>{this.getMothName(this.state.date.getMonth())}월</button>*/}
            {/*<Modal*/}
              {/*style={{*/}
                {/*content: {*/}
                  {/*width:'400px',*/}
                  {/*height:'300px'*/}
                {/*}*/}
              {/*}}*/}
              {/*id="modal_with_forms"*/}
              {/*isOpen={isOpen}*/}
              {/*closeTimeoutMS={150}*/}
              {/*contentLabel="modalB"*/}
              {/*shouldCloseOnOverlayClick={true}*/}
              {/*onRequestClose={this.toggleModal}*/}
              {/*aria={{*/}
                {/*labelledby: "heading",*/}
                {/*describedby: "fulldescription"*/}
              {/*}}>*/}
              {/*<h1>{(this.state.date.getFullYear())}</h1>*/}
              {/*<div className="flex-container" tabIndex="0" role="document" style={{height:"80%"}}>*/}
                {/*<div className="flex-row">*/}
                  {/*<button className="flex-item">1월</button>*/}
                  {/*<button className="flex-item">2월</button>*/}
                  {/*<button className="flex-item">3월</button>*/}
                  {/*<button className="flex-item">4월</button>*/}
                {/*</div>*/}
                {/*<div className="flex-row">*/}
                  {/*<button className="flex-item">5월</button>*/}
                  {/*<button className="flex-item">6월</button>*/}
                  {/*<button className="flex-item">7월</button>*/}
                  {/*<button className="flex-item">8월</button>*/}
                {/*</div>*/}
                {/*<div className="flex-row">*/}
                  {/*<button className="flex-item">9월</button>*/}
                  {/*<button className="flex-item">10월</button>*/}
                  {/*<button className="flex-item">11월</button>*/}
                  {/*<button className="flex-item">12월</button>*/}
                {/*</div>*/}
              {/*</div>*/}
            {/*</Modal>*/}
          </div>
          <button><i className="material-icons">navigate_next</i></button>
        </div>
        <div></div>
      </div>
      <ul className="flex-row calender-head">
        {/*<li className="flex-item">{this.getDayName(0)}</li>*/}
        {/*<li className="flex-item">{this.getDayName(1)}</li>*/}
        {/*<li className="flex-item">{this.getDayName(2)}</li>*/}
        {/*<li className="flex-item">{this.getDayName(3)}</li>*/}
        {/*<li className="flex-item">{this.getDayName(4)}</li>*/}
        {/*<li className="flex-item">{this.getDayName(5)}</li>*/}
        {/*<li className="flex-item">{this.getDayName(6)}</li>*/}
      </ul>
      <div className="flex-container calendar-body">
        {/*{this.createTable()}*/}
      </div>

      <DatePicker
        inline
        selected={this.state.startDate}
        onChange={this.handleChange}
      />

















    </div>
  }
}



export default Calendar;
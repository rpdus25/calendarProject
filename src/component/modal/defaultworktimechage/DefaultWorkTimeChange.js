import React, { Component } from 'react';
import Modal from 'react-modal';
import '../modal.css'
import DatePicker from "react-datepicker";
import moment from "moment/moment";
import setMinutes from "date-fns/setMinutes";
import setHours from "date-fns/setHours";
import getYear from "date-fns/getYear";
import getMonth from "date-fns/getMonth";



export default props => {
  const {
    handleChange,
    isOpen,
    askToClose,
    onAfterOpen,
    onRequestClose,
    onChangeInput,
    onSubmit,
    startDate,
    endDate,
    onChangeHandleOption,
    selected,
    onChangeInputStart,
    onChangeInputEnd,
    defaultDate,
    isWeekday,
    years,
    months
  } = props;

  return (
    <Modal
      style={{
        content: {
          width:'600px',
          height:'300px'
        }
      }}
      contentLabel="modalB"
      closeTimeoutMS={150}
      isOpen={isOpen}
      onAfterOpen={onAfterOpen}
      onRequestClose={onRequestClose}>
      {/*<h1>{title}</h1>*/}
      <h1>기본 근무 시간 변경</h1>
      <div>
        <dl className="list-wrap">
          <dt>기본 근무 시간:</dt>
          <dd>
            <i className="material-icons">access_time</i>
            <span>08:00 ~ </span>
            <i className="material-icons">access_time</i>
            <span>17:00</span>
          </dd>
        </dl>
        <dl className="list-wrap">
          <dt>변경 시작 날짜:</dt>
          <dd>
            <DatePicker
              minDate={defaultDate}
              // dateFormat="yyyy/MM/dd"
              selected={startDate}
              selectsStart
              startDate={startDate}
              endDate={startDate}
              onChange={handleChange}
              filterDate={isWeekday}
              placeholderText="날짜를 선택해주세요."
              timeFormat="HH:mm"
              timeIntervals={15}
              dateFormat="MMMM d, yyyy h:mm aa"
              timeCaption="time"

              renderCustomHeader={({
               date,
               changeYear,
               changeMonth,
               decreaseMonth,
               increaseMonth,
               prevMonthButtonDisabled,
               nextMonthButtonDisabled
             }) => (
                <div
                  style={{
                    margin: 10,
                    display: "flex",
                    justifyContent: "center"
                  }}
                >
                  <button
                    onClick={decreaseMonth}
                    disabled={prevMonthButtonDisabled}
                  >
                    {"<"}
                  </button>
                  <select
                    value={getYear(date)}
                    onChange={({ target: { value } }) => changeYear(value)}
                  >
                    {years.map(option => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>

                  <select
                    value={months[getMonth(date)]}
                    onChange={({ target: { value } }) => changeMonth(value)}
                  >
                    {months.map(option => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>

                  <button
                    onClick={increaseMonth}
                    disabled={nextMonthButtonDisabled}
                  >
                    {">"}
                  </button>
                </div>
              )}
            />
          </dd>
        </dl>
        <dl className="list-wrap">
          <dt>변경 근무 시간:</dt>
          <dd>
            <select name="" id="" >
              <option value="0">08:00 ~ 17:00</option>
              <option value="1">09:00 ~ 18:00</option>
              <option value="2">10:00 ~ 19:00</option>
              <option value="3">10:00 ~ 17:00</option>
            </select>
          </dd>
        </dl>
        <button className="btn btn-primary">저장</button>
      </div>
      <button onClick={askToClose}>닫기</button>
    </Modal>
  );
}

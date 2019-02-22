import React from 'react';
import Modal from 'react-modal';
import '../modal.css'
import DatePicker from "react-datepicker";
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
    months,
    defaultWorkTimeChangeSave,
    defaultWorkTime
  } = props;

  return (
    <Modal
      style={{
        // overlay: {
        //   position: 'fixed',
        //   top: 0,
        //   left: 0,
        //   right: 0,
        //   bottom: 0,
        //   display: 'flex',
        //   justifyContent: 'center',
        //   alignItems: 'center',
        //   backgroundColor: 'rgba(0, 0, 0, 0.75)'
        // },
        content: {
          width:'400px'
        }
      }}
      contentLabel="modalC"
      closeTimeoutMS={150}
      isOpen={isOpen}
      onAfterOpen={onAfterOpen}
      onRequestClose={onRequestClose}>
      <div className="list-wrap-tit">
        <h1>근무 시간 변경</h1>
        <button className="btn-close"><i className="material-icons" onClick={askToClose}>close</i></button>
      </div>
      <div>
        <dl className="list-wrap">
          <dt>변경 시작 날짜:</dt>
          <dd>
            <i className="material-icons">date_range</i>
            <DatePicker
              minDate={defaultDate}
              dateFormat="yyyy/MM/dd"
              selected={startDate}
              onChange={onChangeInputStart}
              filterDate={isWeekday}
              placeholderText="날짜를 선택해주세요."

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
            <i className="material-icons">access_time</i>

            <select name="" id="" >
              <option value="0">08:00 ~ 17:00</option>
              <option value="1">09:00 ~ 18:00</option>
              <option value="2">10:00 ~ 19:00</option>
            </select>
          </dd>
        </dl>
        <div className="list-wrap" style={{justifyContent: "flex-end"}}>
          <button
            className="btn btn-primary"
            // onClick={defaultWorkTimeChangeSave}
          >
            저장
          </button>
          <button className="btn btn-primary" onClick={askToClose}>닫기</button>
        </div>
      </div>

    </Modal>
  );
}

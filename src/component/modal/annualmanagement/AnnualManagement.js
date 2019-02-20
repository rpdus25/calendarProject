import React from 'react';
import Modal from 'react-modal';
import '../modal.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment/moment";
import setMinutes from "date-fns/setMinutes";
import setHours from "date-fns/setHours";

export default props => {
  const {
    onSubmit,
    title,
    isOpen,
    askToClose,
    desc,
    startDate,
    endDate,
    onChangeHandleOption,
    selected,
    onAfterOpen,
    onRequestClose,
    onChangeInput,
    onChangeInputStart,
    onChangeInputEnd,
    defaultDate,
    isWeekday
  } = props;

  return (
    <Modal
      style={{
        content: {
          width:'900px',
          height:'300px',
        }
      }}
      contentLabel="modalE"
      closeTimeoutMS={150}
      isOpen={isOpen}
      onAfterOpen={onAfterOpen}
      onRequestClose={onRequestClose}
      >

    <h1>{title}</h1>
    <p>{moment(startDate).format('LL')}</p>
    <button onClick={askToClose}>
      <i className="material-icons">close</i>
    </button>
        <div>
          <div className="list-wrap">
            <input
              className="hidden"
              type='radio'
              id='radio-1'
              name='myRadio'
              value='연차'
              checked={selected === '연차'}
              onChange={onChangeHandleOption}
            />
            <label htmlFor="radio-1" className="btn btn-primary">연차 </label>
            <input
              className="hidden"
              type='radio'
              id='radio-2'
              name='myRadio'
              value='오전 반차'
              checked={selected === '오전 반차'}
              onChange={onChangeHandleOption}
            />
            <label htmlFor="radio-2" className="btn btn-primary"> 오전 반차 </label>
            <input
              className="hidden"
              type='radio'
              id='radio-3'
              name='myRadio'
              value='오후 반차'
              checked={selected === '오후 반차'}
              onChange={onChangeHandleOption}
            />
            <label htmlFor="radio-3" className="btn btn-primary">오후 반차</label>
            <input
              className="hidden"
              type='radio'
              id='radio-4'
              name='myRadio'
              value='외출'
              checked={selected === '외출1'}
              onChange={onChangeHandleOption}
            />
            <label htmlFor="radio-4" className="btn btn-primary"> 외출1</label>
            <input
              className="hidden"
              type='radio'
              id='radio-5'
              name='myRadio'
              value='외출'
              checked={selected === '외출2'}
              onChange={onChangeHandleOption}
            />
            <label htmlFor="radio-5" className="btn btn-primary">외출2</label>
            <input
              className="hidden"
              type='radio'
              id='radio-6'
              name='myRadio'
              value='외출'
              checked={selected === '외출3'}
              onChange={onChangeHandleOption}
            />
            <label htmlFor="radio-6" className="btn btn-primary"> 외출3</label>
            <input
              className='hidden'
              type='radio'
              id='radio-7'
              name='myRadio'
              value='외출'
              checked={selected === '외출4'}
              onChange={onChangeHandleOption}
            />
            <label htmlFor="radio-7" className="btn btn-primary">외출4</label>
          </div>
          <div className="list-wrap">
            <textarea
              name=""
              id="ddd"
              value={desc}
              placeholder="내용을 입력하세요"
              onChange={onChangeInput}
              style={{
                width:"100%",
                display:"block",
                margin:"10px auto"
              }}
            />
          </div>
            <div className="list-wrap">
              <i className="material-icons">date_range</i>
              <DatePicker
                  minDate={defaultDate}
                  dateFormat="yyyy/MM/dd"
                  selected={startDate}
                  selectsStart
                  startDate={startDate}
                  endDate={endDate}
                  onChange={onChangeInputStart}
                  filterDate={isWeekday}
                  placeholderText="날짜를 선택해주세요."
                />
              -
              <i className="material-icons">date_range</i>
              <DatePicker
                minDate={defaultDate}
                dateFormat="yyyy/MM/dd"
                selected={endDate}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                onChange={onChangeInputEnd}
                filterDate={isWeekday}
                placeholderText="날짜를 선택해주세요."
              />

              <i className="material-icons">
                access_time
              </i>
              <DatePicker
                minDate={defaultDate}
                selected={startDate}
                onChange={onChangeInputStart}
                minTime={setHours(setMinutes(startDate, 0), 8)}
                maxTime={setHours(setMinutes(startDate, 0), 18)}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                dateFormat="h:mm aa"
                timeCaption="Time"
                placeholderText="시간을 선택해주세요."
              />
              -
              <i className="material-icons">
                access_time
              </i>
              <DatePicker
                minDate={defaultDate}
                selected={endDate}
                onChange={onChangeInputEnd}
                minTime={setHours(setMinutes(endDate, 0), 9)}
                maxTime={setHours(setMinutes(endDate, 0), 19)}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                dateFormat="h:mm aa"
                timeCaption="Time"
                placeholderText="시간을 선택해주세요."
              />
            </div>
              {title === '연차관리' ?
                <div
                  className="list-wrap"
                  style={{
                    justifyContent:"flex-end"
                  }}
                >
                  <button
                    className="btn btn-primary"
                    onClick={onSubmit}
                  >
                    저장
                  </button>
                  <button
                    onClick={askToClose}
                    className="btn btn-primary"
                  >
                    취소
                  </button>
                </div>

                :
                <div
                  className="list-wrap"
                  style={{
                    justifyContent:"flex-end"
                  }}
                >
                <button
                  className="btn btn-primary"
                >
                  수정
                </button>
                <button
                  onClick={askToClose}
                  className="btn btn-primary"
                >
                  취소
                </button>
              </div>
            }
        </div>
    </Modal>
  );
}

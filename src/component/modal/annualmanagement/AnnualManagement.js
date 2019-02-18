import React from 'react';
import Modal from 'react-modal';
import '../modal.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import events from "../../../container/events";
import moment from "moment/moment";

export default props => {
  const {
    title, isOpen, askToClose, desc, startDate, endDate, onChangeHandleOption, selected,
    onAfterOpen, onRequestClose, onChangeInput, onChangeInputStart, onChangeInputEnd
  } = props;

  return (
    <Modal
      style={{
        content: {
          width:'900px',
          height:'300px'
        }
      }}
      contentLabel="modalE"
      closeTimeoutMS={150}
      isOpen={isOpen}
      onAfterOpen={onAfterOpen}
      onRequestClose={onRequestClose}>
      <p>{moment(startDate).format('LL')}</p>
      <h1>{title}</h1>
      <button onClick={askToClose}>닫기</button>
      <div>
        <div className="list-wrap">
          <label htmlFor="radio-1" className="btn btn-primary">
            <input
              type='radio'
              id='radio-1'
              name='myRadio'
              value='연차'
              checked={selected === '연차'}
              onChange={onChangeHandleOption}
            />
            연차
          </label>
          <label htmlFor="radio-2" className="btn btn-primary">
            <input
              type='radio'
              id='radio-2'
              name='myRadio'
              value='반차'
              checked={selected === '반차'}
              onChange={onChangeHandleOption}
            />
            반차
          </label>
          <label htmlFor="radio-3" className="btn btn-primary">
            <input
              type='radio'
              id='radio-3'
              name='myRadio'
              value='외출'
              checked={selected === '외출'}
              onChange={onChangeHandleOption}
            />
            외출
          </label>
        </div>
        <div className="list-wrap">
          <textarea
            name=""
            id="ddd"
            value={desc}
            placeholder="내용을 입력하세요"
            onChange={onChangeInput}
            style={{width:"100%", display:"block"}}
          />
        </div>

        <p>
          {selected === '연차' ?
            <div className="list-wrap">
              <i className="material-icons">date_range</i>
              <DatePicker
                dateFormat="yyyy/MM/dd"
                selected={startDate}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                onChange={onChangeInputStart}
              />
              -
              <i className="material-icons">date_range</i>
              <DatePicker
                dateFormat="yyyy/MM/dd"
                selected={endDate}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                onChange={onChangeInputEnd}
              />
              <button className="btn btn-primary">저장</button>
            </div>
            :
            <div className="list-wrap">
              <i className="material-icons">date_range</i>
              <DatePicker
                dateFormat="yyyy/MM/dd"
                selected={startDate}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                onChange={onChangeInputStart}
              />
              -
              <i className="material-icons">date_range</i>
              <DatePicker
                dateFormat="yyyy/MM/dd"
                selected={endDate}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                onChange={onChangeInputEnd}
              />

              <i className="material-icons">
                access_time
              </i>
              <DatePicker
                selected={startDate}
                onChange={onChangeInputStart}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                dateFormat="h:mm aa"
                timeCaption="Time"
              />
              -
              <i className="material-icons">
                access_time
              </i>
              <DatePicker
                selected={endDate}
                onChange={onChangeInputEnd}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                dateFormat="h:mm aa"
                timeCaption="Time"
              />
              <button className="btn btn-primary">저장</button>
            </div>
          }
        </p>
      </div>
    </Modal>
  );
}

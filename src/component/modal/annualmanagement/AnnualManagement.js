import React from 'react';
import Modal from 'react-modal';
import '../modal.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


export default props => {


  const {
    title, isOpen, askToClose, start, end, desc, startDate, endDate,
    onAfterOpen, onRequestClose, onChangeInput, onChangeInput2
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
      <h1>{title}</h1>
      <h2>{start}</h2>
      <h3>{end}</h3>
      <h4>{desc}</h4>
      <button onClick={askToClose}>닫기</button>
      <div>
        <div className="list-wrap">
          <button className="btn btn-primary">연차</button>
          <button className="btn btn-primary">반차</button>
          <button className="btn btn-primary">외출</button>
        </div>
        <div className="list-wrap">
          <textarea name="" id="ddd"  placeholder="내용을 입력하세요" onChange={onChangeInput}></textarea>
        </div>
        <div className="list-wrap">
          <i className="material-icons">date_range</i>
          <DatePicker
            selected={startDate}
            onChange={onChangeInput2}
          />
          -
          <i className="material-icons">date_range</i>

          <DatePicker
            selected={endDate}
            onChange={onChangeInput2}
          />




          <i className="material-icons">
            access_time
          </i>
          <input type="time"/>
          -
          <i className="material-icons">
            access_time
          </i>
          <input type="time"/>

          <button className="btn btn-primary">저장</button>
        </div>
      </div>

    </Modal>
  );
}

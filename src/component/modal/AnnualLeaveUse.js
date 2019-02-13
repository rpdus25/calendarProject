import React from 'react';
import Modal from 'react-modal';
import './modal.css'

export default props => {
  const {
    title, isOpen, askToClose,
    onAfterOpen, onRequestClose, onChangeInput
  } = props;

  return (
    <Modal
      style={{
        content: {
          width:'400px',
          height:'300px'
        }
      }}
      contentLabel="modalD"
      closeTimeoutMS={150}
      isOpen={isOpen}
      onAfterOpen={onAfterOpen}
      onRequestClose={onRequestClose}>
      {/*<h1>{title}</h1>*/}
      <h1>연차 사용</h1>
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
          <dt>출/퇴근 시간:</dt>
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

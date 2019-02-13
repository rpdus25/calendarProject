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
          position: 'static',
          width:'400px',
          height:'300px',
          margin:'0 auto',
          background: '#fff',
          overflow: 'auto',
          WebkitOverflowScrolling: 'touch',
          borderRadius: '4px',
          outline: 'none',
          padding: '20px'
        }
      }}
      contentLabel="modalC"
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

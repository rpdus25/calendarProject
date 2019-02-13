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
          width:'900px',
          height:'300px'
        }
      }}
      contentLabel="modalE"
      closeTimeoutMS={150}
      isOpen={isOpen}
      onAfterOpen={onAfterOpen}
      onRequestClose={onRequestClose}>
      {/*<h1>{title}</h1>*/}
      <h1>연차 관리</h1>
      <button onClick={askToClose}>닫기</button>
      <div>
        <div className="list-wrap">
          <button className="btn btn-primary">연차</button>
          <button className="btn btn-primary">반차</button>
          <button className="btn btn-primary">외출</button>
        </div>
        <div className="list-wrap">
          <textarea name="" id="" placeholder="내용을 입력하세요"></textarea>
        </div>
        <div className="list-wrap">
          <i className="material-icons">date_range</i>
          <input type="date"/>
          -
          <i className="material-icons">date_range</i>
          <input type="date"/>


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

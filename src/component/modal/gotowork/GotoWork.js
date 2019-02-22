import React from 'react';
import Modal from 'react-modal';


export default props => {
  const {
    isOpen,
    onAfterOpen,
    onRequestClose,
    date,
    insertCommute
  } = props;

  return (
    <Modal
      style={{
        content: {
          width:'400px'
        }
      }}
      contentLabel="modalA"
      closeTimeoutMS={150}
      isOpen={isOpen}
      onAfterOpen={onAfterOpen}
      onRequestClose={onRequestClose}>
      <h1>{insertCommute}</h1>
      <div>
        <span>
          현재 시각 {date.toLocaleString()} 입니다. <br/>
          출근 체크 하시겠습니까?
        </span>


      </div>
      <div className="list-wrap" style={{justifyContent:"flex-end"}}>
        <button className="btn btn-primary">확인</button>
        <button onClick={onRequestClose} className="btn btn-primary">취소</button>
      </div>

    </Modal>
  );
}

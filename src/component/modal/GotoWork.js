import React from 'react';
import Modal from 'react-modal';

export default props => {
  const {
    title, isOpen, askToClose,
    onAfterOpen, onRequestClose, onChangeInput
  } = props;

  return (
    <Modal
      style={{
        overlay: {
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.75)'
        },
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
      contentLabel="modalA"
      closeTimeoutMS={150}
      isOpen={isOpen}
      onAfterOpen={onAfterOpen}
      onRequestClose={onRequestClose}>
      <h1>{title}</h1>
      <div>
        현재 시각 2019-01-23 07:56:43 [수요일] 입니다. <br/>
        출근 체크 하시겠습니까?
      </div>
      <button>확인</button>
      <button onClick={askToClose}>취소</button>
      {/*<form>*/}
        {/*<input onChange={onChangeInput} />*/}
        {/*<input />*/}
        {/*<br />*/}
      {/*</form>*/}
    </Modal>
  );
}

import React from 'react';
import Modal from 'react-modal';

export default props => {
  const {
    title,
    isOpen,
    askToClose,
    onAfterOpen,
    onRequestClose,
    onChangeInput,
    date,
    insertCommute
  } = props;




  return (
    <Modal
      style={{
        content: {
          width:'400px',
          height:'300px'
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
          현재 시각 2019-01-23  [수요일] 입니다. <br/>
          출근 체크 하시겠습니까?
        </span>
        {date.toLocaleTimeString()}

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

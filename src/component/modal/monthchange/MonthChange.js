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
      <h1>test</h1>
      <div className="flex-container" tabIndex="0" role="document" style={{height:"80%"}}>
        <div className="flex-row">
          <button className="flex-item">2011</button>
          <button className="flex-item">2012</button>
          <button className="flex-item">2013</button>
          <button className="flex-item">2014</button>
        </div>
        <div className="flex-row">
          <button className="flex-item">2015</button>
          <button className="flex-item">2016</button>
          <button className="flex-item">2017</button>
          <button className="flex-item">2018</button>
        </div>
        <div className="flex-row">
          <button className="flex-item">2019</button>
          <button className="flex-item">2020</button>
          <button className="flex-item">2021</button>
          <button className="flex-item">2022</button>
        </div>
      </div>
    </Modal>
  );
}

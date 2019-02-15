import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import AnnualLeaveUseModal from './annualleaveuse/index'
import AnnualManagementModal from './annualmanagement/index'

Modal.setAppElement('#app');

const examples = [
  AnnualLeaveUseModal,
  AnnualManagementModal
];

class ModalMain extends Component {
  render() {
    return (
      <div className="modal-wrap">
        {examples.map((example, key) => {
          const ExampleApp = example.app;
          return (
            <div key={key + 1} className="modal-inner">
              <ExampleApp />
            </div>
          );
        })}
      </div>
    );
  }
}

export default ModalMain;
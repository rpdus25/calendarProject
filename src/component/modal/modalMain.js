import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import AnnualManagementModal from './annualmanagement/index'
import DefaultWorkTimeChangeModal from './defaultworktimechage/index'
import GotoWorkModal from './gotowork/index'
import WorkTimeChangeModal from './worktimechange/index'

Modal.setAppElement('#app');

const modals = [
  // 출근
  GotoWorkModal,
  // 연차관리
  AnnualManagementModal,
  // 기본 근무 시간 변경
  DefaultWorkTimeChangeModal,
  // 근무 시간 변경
  WorkTimeChangeModal
];

class ModalMain extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="modal-wrap">
          {modals.map((modal, key) => {
            const ModalApp = modal.app;
            return (
              <div key={key + 1} className="modal-inner">
                {}
                <ModalApp
                  {...this.props}
                />
              </div>
            );
          })}
        </div>
      </div>

    );
  }
}

export default ModalMain;
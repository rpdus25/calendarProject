import React, { Component } from 'react';
import './Annual.css';
import ModalMain from "../../component/modal/modalMain";

class Annual extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    const {
      baseAnnual,
      addAnnual,
      carryForwardAnnual,
      remainingAnnual,
      remainingAddAnnual
    } = this.props;

    return <div className="annual-wrap">
      <div className="btn-wrap">
        <ModalMain
          {...this.props}
        />
      </div>
      <ul className="annual-list">
        <li>기본 연차 : {baseAnnual}개</li>
        <li>추가연차 : {addAnnual}개</li>
        <li>이월연차 : {carryForwardAnnual}개</li>
        <li>남은기본연차 : {remainingAnnual}개</li>
        <li>남은추가연차 : {remainingAddAnnual}일</li>
      </ul>
    </div>
  }
}
export default Annual;
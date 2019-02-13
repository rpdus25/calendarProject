import React, { Component } from 'react';
import './Annual.css';
import Popup from "../../component/popup/Popup";

class Annual extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  };


  render() {
    return <div className="annual-wrap">
      <div className="btn-wrap">
        <Popup/>
      </div>
      <ul className="annual-list">
        <li>기본 연차 : 15개</li>
        <li>추가연차 : 8개</li>
        <li>이월연차 : 4개</li>
        <li>남은기본연차 : 4개</li>
        <li>남은추가연차 : 4일</li>
      </ul>
    </div>
  }
}



export default Annual;
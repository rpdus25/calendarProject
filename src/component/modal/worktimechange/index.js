import React, { Component } from 'react';
import WorkTimeChange from '../worktimechange/WorkTimeChange';
import '../modal.css';

const MODAL_C = 'modal_c';

class SimpleUsage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentModal: null
    };
  }

  toggleModal = key => event => {
    event.preventDefault();
    if (this.state.currentModal) {
      this.handleModalCloseRequest();
      return;
    }

    this.setState({
      ...this.state,
      currentModal: key
    });
  }

  handleModalCloseRequest = () => {
    // opportunity to validate something and keep the modal open even if it
    // requested to be closed
    this.setState({
      ...this.state,
      currentModal: null
    });
  }

  handleInputChange = e => {
    let text = e.target.value;
    this.setState({ ...this.state});
  }

  handleOnAfterOpenModal = () => {
    // when ready, we can access the available refs.
    this.heading && (this.heading.style.color = '#F00');
  }

  render() {
    const { currentModal } = this.state;

    return (
      <div>
        <button type="button" className="btn btn-primary" onClick={this.toggleModal(MODAL_C)}>근무 시간 변경</button>
        <WorkTimeChange
          isOpen={currentModal == MODAL_C}
          onAfterOpen={this.handleOnAfterOpenModal}
          onRequestClose={this.handleModalCloseRequest}
          askToClose={this.toggleModal(MODAL_C)}
        />

        {/* 그냥 모달로 추가했을 때 수정 */}
        {/*<Modal*/}
          {/*style={{*/}
            {/*overlay: {*/}
              {/*position: 'fixed',*/}
              {/*top: 0,*/}
              {/*left: 0,*/}
              {/*right: 0,*/}
              {/*bottom: 0,*/}
              {/*display: 'flex',*/}
              {/*justifyContent: 'center',*/}
              {/*alignItems: 'center',*/}
              {/*backgroundColor: 'rgba(0, 0, 0, 0.75)'*/}
            {/*},*/}
            {/*content: {*/}
              {/*position: 'static',*/}
              {/*width:'400px',*/}
              {/*height:'200px',*/}
              {/*margin:'0 auto',*/}
              {/*background: '#fff',*/}
              {/*overflow: 'auto',*/}
              {/*WebkitOverflowScrolling: 'touch',*/}
              {/*borderRadius: '4px',*/}
              {/*outline: 'none',*/}
              {/*padding: '20px'*/}
            {/*}*/}
          {/*}}*/}
          {/*ref="mymodal3"*/}
          {/*id="test3"*/}
          {/*aria={{*/}
            {/*labelledby: "heading",*/}
            {/*describedby: "fulldescription"*/}
          {/*}}*/}
          {/*closeTimeoutMS={150}*/}
          {/*contentLabel="modalC"*/}
          {/*isOpen={currentModal == MODAL_C}*/}
          {/*shouldCloseOnOverlayClick={true}*/}
          {/*onAfterOpen={this.handleOnAfterOpenModal}*/}
          {/*onRequestClose={this.toggleModal(MODAL_C)}>*/}
          {/*<h1 id="heading" ref={h1 => this.heading = h1}>근무 시간 변경</h1>*/}
          {/*<button onClick={this.toggleModal(MODAL_C)}>close</button>*/}
          {/*<div id="fulldescription" tabIndex="0" role="document" style={{outline:"none"}}>*/}
            {/*<dl className="list-wrap">*/}
              {/*<dt>날짜 :</dt>*/}
              {/*<dd>*/}
                {/*<i className="material-icons">date_range</i>*/}
                {/*<input type="date"/>*/}
              {/*</dd>*/}
            {/*</dl>*/}
            {/*<dl className="list-wrap">*/}
              {/*<dt>출/퇴근 시간:</dt>*/}
              {/*<dd>*/}
                {/*<select name="" id="" >*/}
                  {/*<option value="0">08:00 ~ 17:00</option>*/}
                  {/*<option value="1">09:00 ~ 18:00</option>*/}
                  {/*<option value="2">10:00 ~ 19:00</option>*/}
                  {/*<option value="3">10:00 ~ 17:00</option>*/}
                {/*</select>*/}
              {/*</dd>*/}
            {/*</dl>*/}
            {/*<button className="btn btn-primary">저장</button>*/}

          {/*</div>*/}
        {/*</Modal>*/}
      </div>
    );
  }
}

export default {
  // label: "Working with one modal at a time.",
  app: SimpleUsage
};

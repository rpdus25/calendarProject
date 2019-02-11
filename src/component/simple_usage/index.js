import React, { Component } from 'react';
import Modal from 'react-modal';
import MyModal from './modal';

import './simple.css';

// const MODAL_A = 'modal_a';
const MODAL_B = 'modal_b';

const DEFAULT_TITLE = 'Default title';

class SimpleUsage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title1: DEFAULT_TITLE,
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
      currentModal: key,
      title1: DEFAULT_TITLE
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
    if (text == '') {
      text = DEFAULT_TITLE;
    }
    this.setState({ ...this.state, title1: text });
  }

  handleOnAfterOpenModal = () => {
    // when ready, we can access the available refs.
    this.heading && (this.heading.style.color = '#F00');
  }

  render() {
    const { currentModal } = this.state;

    return (
      <div>
        {/*<button type="button" className="btn btn-primary" onClick={this.toggleModal(MODAL_A)}>Open Modal A</button>*/}
        <button type="button" className="btn btn-primary" onClick={this.toggleModal(MODAL_B)}>Open Modal B</button>
        {/*<MyModal*/}
          {/*title={this.state.title1}*/}
          {/*isOpen={currentModal == MODAL_A}*/}
          {/*onAfterOpen={this.handleOnAfterOpenModal}*/}
          {/*onRequestClose={this.handleModalCloseRequest}*/}
          {/*askToClose={this.toggleModal(MODAL_A)}*/}
          {/*onChangeInput={this.handleInputChange} />*/}
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
              width:'300px',
              height:'200px',
              margin:'0 auto',
              background: '#fff',
              overflow: 'auto',
              WebkitOverflowScrolling: 'touch',
              borderRadius: '4px',
              outline: 'none',
              padding: '20px'
            }
          }}
          ref="mymodal2"
          id="test2"
          aria={{
            labelledby: "heading",
            describedby: "fulldescription"
          }}
          closeTimeoutMS={150}
          contentLabel="modalB"
          isOpen={currentModal == MODAL_B}
          shouldCloseOnOverlayClick={true}
          onAfterOpen={this.handleOnAfterOpenModal}
          onRequestClose={this.toggleModal(MODAL_B)}>
          <h1 id="heading" ref={h1 => this.heading = h1}>기본 근무 시간 변경</h1>
          <button onClick={this.toggleModal(MODAL_B)}>close</button>
          <div id="fulldescription" tabIndex="0" role="document" style={{outline:"none"}}>
            <dl className="list-wrap">
              <dt>기본 근무 시간:</dt>
              <dd>
                <i className="material-icons">access_time</i>
                <span>08:00 ~ </span>
                <i className="material-icons">access_time</i>
                <span>17:00</span>
              </dd>
            </dl>
            <dl className="list-wrap">
              <dt>변경 출/퇴근 시간:</dt>
              <dd>
                <select name="" id="" >
                  <option value="0">08:00 ~ 17:00</option>
                  <option value="1">09:00 ~ 18:00</option>
                  <option value="2">10:00 ~ 19:00</option>
                  <option value="3">10:00 ~ 17:00</option>
                </select>
              </dd>
            </dl>

          </div>
        </Modal>
      </div>
    );
  }
}

export default {
  label: "Working with one modal at a time.",
  app: SimpleUsage
};

import React, { Component } from 'react';
import '../modal.css';
import MonthChange from "./MonthChange";

const MODAL_A = 'modal_a';
const DEFAULT_TITLE = 'Default title';

class MonthChangeModal extends Component {
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
        {/*<button type="button" className="btn btn-primary" onClick={this.toggleModal(MODAL_A)}>출근</button>*/}
        <MonthChange
          title={this.state.title1}
          isOpen={currentModal == MODAL_A}
          onAfterOpen={this.handleOnAfterOpenModal}
          onRequestClose={this.handleModalCloseRequest}
          askToClose={this.toggleModal(MODAL_A)}
          onChangeInput={this.handleInputChange} />
      </div>
    );
  }
}

export default MonthChangeModal;

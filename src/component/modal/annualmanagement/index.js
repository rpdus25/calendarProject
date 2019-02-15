import React, { Component } from 'react';
import AnnualManagement from '../annualmanagement/AnnualManagement';

const MODAL_E = 'modal_e';
const DEFAULT_TITLE = 'Default title';

class AnnualManagementModal extends Component {
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
        <button type="button" className="btn btn-primary" onClick={this.toggleModal(MODAL_E)}>연차 관리</button>
        <AnnualManagement
          title={this.state.title1}
          isOpen={currentModal == MODAL_E}
          onAfterOpen={this.handleOnAfterOpenModal}
          onRequestClose={this.handleModalCloseRequest}
          askToClose={this.toggleModal(MODAL_E)}
        />
      </div>
    );
  }
}

export default {
  // label: "Working with one modal at a time.",
  app: AnnualManagementModal
};

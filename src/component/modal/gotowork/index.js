import React, { Component } from 'react';
import GotoWork from '../gotowork/GotoWork';
import '../modal.css';

const MODAL_A = 'modal_a';

const DEFAULT_TITLE = 'Default title';

class GotoWorkModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title1: DEFAULT_TITLE,
      currentModal: null
    };
  }

  toggleModal = key => event => {
    event.preventDefault();

    if(this.state.currentModal && this.props.insertCommute === "출근") {
      return false;
    } else {
      this.handleModalCloseRequest();

      this.setState({
        ...this.state,
        currentModal: key,
        title1: DEFAULT_TITLE
      });


      return;

    }
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
    const { insertCommute } = this.props;

    return (
      <div>
        <button type="button" className="btn btn-primary" onClick={this.toggleModal(MODAL_A)}>{insertCommute}</button>
        <GotoWork
          {...this.props}
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

export default {
  // label: "Working with one modal at a time.",
  app: GotoWorkModal
};

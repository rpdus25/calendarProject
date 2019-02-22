import React, { Component } from 'react';
import GotoWork from '../gotowork/GotoWork';
import '../modal.css';

const MODAL_A = 'modal_a';
class GotoWorkModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentModal: null,
      date: new Date()
    };
  }


  // 1초마다 시간이 변하는걸 알려주는 함수
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  //
  toggleModal = key => event => {
    event.preventDefault();

    if(this.state.currentModal && this.props.insertCommute === "출근") {
      return false;
    } else {
      this.handleModalCloseRequest();

      this.setState({
        ...this.state,
        currentModal: key,
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
          isOpen={currentModal == MODAL_A}
          onAfterOpen={this.handleOnAfterOpenModal}
          onRequestClose={this.handleModalCloseRequest}
          askToClose={this.toggleModal(MODAL_A)}
          onChangeInput={this.handleInputChange}
          date={this.state.date}
        />
      </div>
    );
  }
}

export default {
  // label: "Working with one modal at a time.",
  app: GotoWorkModal
};

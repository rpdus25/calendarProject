import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import SimpleUsage from '../modal'

Modal.setAppElement('#app');

const examples = [
  SimpleUsage
];

class Popup extends Component {
  render() {
    return (
      <div className="modal-wrap">
        {examples.map((example, key) => {
          const ExampleApp = example.app;
          return (
            <div key={key + 1} className="example">
              <ExampleApp />
            </div>
          );
        })}
      </div>
    );
  }
}

export default Popup;
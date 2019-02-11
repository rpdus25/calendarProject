import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import SimpleUsage from '../simple_usage'

const appElement = document.getElementById('app');

Modal.setAppElement('#app');

const examples = [
  SimpleUsage
];

class Popup extends Component {
  render() {
    return (
      <div>
        {examples.map((example, key) => {
          const ExampleApp = example.app;
          return (
            <div key={key + 1} className="example" style={{position:"fixed",left:0,top:0}}>
              <h3>{`#${key + 1}. ${example.label}`}</h3>
              <ExampleApp />
            </div>
          );
        })}
      </div>
    );
  }
}

export default Popup;
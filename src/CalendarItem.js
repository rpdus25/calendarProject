import React, { Component } from 'react';
import './Calendar.css';


class CalendarItem extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    return <div className="flex-container calendar-body">
        {this.createTable()}
        {this.state.contactData.map((contact, week) => {
          return (
              <div className="flex-item">{this.props.name} {this.props.phone}</div>
          );
        })}
      </div>
  }
}



export default CalendarItem;
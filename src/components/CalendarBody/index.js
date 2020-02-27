import React, { Component } from 'react';

export default class CalendarBody extends Component {
  constructor (props) {
    super(props);

  }

  render () {

    return (<div>
      <CalendarHeader/>
      <Week></Week>
      <Week></Week>
      <Week></Week>
      <Week></Week>
      <Week></Week>
    </div>);

  }
}

function CalendarHeader (props) {
  return (<div>
    <div>S</div>
    <div>M</div>
    <div>T</div>
    <div>W</div>
    <div>T</div>
    <div>F</div>
    <div>S</div>
  </div>);

}
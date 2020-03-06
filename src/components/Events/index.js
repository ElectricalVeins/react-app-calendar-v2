import React, {Component} from 'react';
import Event from '../Event';

export default class Events extends Component {

  render () {
    const {events: items}= this.props;
    return (items.map((event)=>(<Event key={event.date} events={event.events} date={event.date} /> )))
  }
}
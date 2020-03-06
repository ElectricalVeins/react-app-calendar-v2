import React, {Component} from 'react';

export default class Event extends Component {

  render () {
    const {events,date}=this.props;
    return (events.map((event)=>(<div key={event.time}>{`${event.name} ${date}`}</div>)  ))

  }
}
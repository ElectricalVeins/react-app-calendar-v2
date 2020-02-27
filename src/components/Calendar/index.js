import React, { Component } from 'react';
import CalendarNav from '../CalendarNav';
import CalendarBody from '../CalendarBody';
import styles from './Calendar.module.css';

export default class Calendar extends Component {
  constructor (props) {
    super(props);

  }

  render () {
    return (<div className={styles.container} >
      <CalendarNav/>
      <CalendarBody/>
    </div>);
  }
}
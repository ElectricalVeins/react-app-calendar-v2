import React, { Component } from 'react';
import Week from '../Week';
import styles from './CalendarBody.module.scss';
import moment from 'moment';
import Day from '../Day';

export default class CalendarBody extends Component {
  constructor (props) {
    super(props);
  }

  dateCalc = () => {
    const weeks = [];
    const startDate = this.props.start.clone();

    do {
      const weekDates = [];

      for (let i = 0; i < 7; i++) {
        weekDates.push(startDate.clone());
        startDate.add(1, 'day');
      }

      weeks.push((weekDates));
    }
    while (this.props.currentDate.endOf('month').isSameOrAfter(startDate,
                                                               'date'));

    return weeks;
  };

  bodyRender = () => {
    const weeks = this.dateCalc();
    const weekComponents = [];

    for (let week of weeks) {
      weekComponents.push(
        <Week
          startDate={this.props.start.clone()}
          endDate ={this.props.end.clone()}
          week={week}
          key={week}/>
      );
    }
    return weekComponents;

  };

  render () {

    return (<table>
      <CalendarHeader/>
      <tbody>
        {
          this.bodyRender()
        }
      </tbody>
    </table>);

  }
}

function CalendarHeader (props) {
  return (<thead>
  <tr>
    <th>S</th>
    <th>M</th>
    <th>T</th>
    <th>W</th>
    <th>T</th>
    <th>F</th>
    <th>S</th>
  </tr>
  </thead>);

}
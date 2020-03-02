import React, { Component } from 'react';
import moment from 'moment';
import styles from './Day.module.scss';

export default class Day extends Component {

  dayRender = () => {
    const { startDate, endDate } = this.props;
    const { day } = this.props;

    if (day< startDate.day() ||
        day.isAfter(endDate, 'date')) {

      return (<td className={styles.hiddenDay}>
          {day.date()}
        </td>
      );
    } else if(day.isSame(this.props.currentDate,'day')){
      return (<td className={styles.currentDay}>
            {day.date()}
          </td>
      );
    } else {
      return (<td className={styles.day}>
          {day.date()}
        </td>
      );
    }

  };

  render () {

    return (<>
        {
          this.dayRender()
        }
      </>
    );
  }
}
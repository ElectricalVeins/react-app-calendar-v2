import React, {Component} from 'react';
import moment from 'moment';
import styles from './Day.module.scss';
import EventMark from "../EventMark";
import classNames from 'classnames'

export default class Day extends Component {

    selectDay = () => {
        this.props.selectDayHandler(this.props.day.clone())
    };

    /* dayRender = () => {
         const {start, end, selectedDay, day, currentDay} = this.props;
         const dayClassNames = [];

         if (day.isBefore(start.clone(), 'date') || day.isAfter(end.clone(), 'date')) {
             dayClassNames.push(styles.hiddenDay)
         }
         /!*    if (day.isSame(selectedDay,'date') ) {
                 dayClassNames.push(styles.selectedDay)
             }*!/
         if (day.isSame(currentDay, 'day')) {
             dayClassNames.push(styles.currentDay)
         }

         return (<p
             className={classNames(dayClassNames)}

         >
             {day.date()}
         </p>)
     };*/

    eventMarkRender = () => {
        const length = this.props.events.length;
        const eventMarks = [];

        if (Array.isArray(this.props.events) && length > 0) {

            for (let i = 0; i <= length && i < 3; i++) {
                eventMarks.push(<EventMark key={i}/>
                )
            }
        }
        return eventMarks
    };

    render() {
        const {start, end, selectedDay, day, currentDay} = this.props;
        const classNamesList = classNames(styles.day,
            {[styles.selectedDay]: selectedDay.isSame(day, 'day')},
            {[styles.hiddenDay]: day.isBefore(start.clone(), 'date') || day.isAfter(end.clone(), 'date')},
            {[styles.currentDay]: day.isSame(currentDay, 'day')});


        return (<td className={classNamesList}
                    onClick={this.selectDay}>
                <p>
                    {
                        day.date()
                    }
                </p>
                <div className={styles.eventsContainer}>
                    {
                        this.eventMarkRender()
                    }
                </div>
            </td>
        );
    }
}
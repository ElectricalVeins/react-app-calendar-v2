import React, {Component} from 'react';
import moment from 'moment';
import styles from './Day.module.scss';
import EventMark from "../EventMark";

export default class Day extends Component {

    selectDay = () => {
        this.props.selectDayHandler(this.props.day.clone())
    };

    dayRender = () => {
        const {start, end, selectedDay, day, currentDay} = this.props;
        const dayClassNames = [];

        if (day.isBefore(start.clone(), 'date') || day.isAfter(end.clone(), 'date')) {
            dayClassNames.push(styles.hiddenDay)
        }
        if (day.isSame(selectedDay,'date') ) {
            dayClassNames.push(styles.selectedDay)
        }
        if (day.isSame(currentDay, 'day')) {
            dayClassNames.push(styles.currentDay)
        }


        return (<p
            className={dayClassNames.join(' ')}
            onClick={this.selectDay}
        >
            {day.date()}
        </p>)
    };

    eventMarkRender=()=>{
        const length = this.props.events.length;
        const eventMarks=[];
        if(Array.isArray(this.props.events) && length >0){
            for(let i= 0;i<=length && i<3;i++){
                eventMarks.push(<EventMark key={i} />)
            }

        }

        return eventMarks
    };

    render() {

        return (<td className={styles.day}>
                {
                    this.dayRender()
                }
                <div className={styles.eventsContainer}>
                {
                    this.eventMarkRender()
                }
                </div>
            </td>
        );
    }
}
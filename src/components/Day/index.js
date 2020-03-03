import React, {Component} from 'react';
import moment from 'moment';
import styles from './Day.module.scss';

export default class Day extends Component {

    selectDay = () => {
        this.props.selectDayHandler(this.props.day.clone())
    };

    dayRender = () => {
        const {startDate, endDate, selectedDay, day, currentDay} = this.props;
        const dayClassNames = [];

        if (day.isBefore(startDate, 'date') || day.isAfter(endDate, 'date')) {
            dayClassNames.push(styles.hiddenDay)
        }
        if (day.isSame(selectedDay,'date') ) {
            dayClassNames.push(styles.selectedDay)
        }
        if (day.isSame(currentDay, 'day')) {
            dayClassNames.push(styles.currentDay)
        }

        dayClassNames.push(styles.day);

        return (<td
            className={dayClassNames.join(' ')}
            onClick={this.selectDay}
        >
            {day.date()}
        </td>)
    };

    render() {

        return (<>
                {
                    this.dayRender()
                }
            </>
        );
    }
}
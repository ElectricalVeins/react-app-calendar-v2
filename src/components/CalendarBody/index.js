import React, {Component} from 'react';
import Week from '../Week';
import styles from './CalendarBody.module.css'
import moment from "moment";
import Day from "../Day";

export default class CalendarBody extends Component {
    constructor(props) {
        super(props);

    }

    dateRender = (date) => (
        <Day key={date.unix()}
             date={date}
             today={this.props.currentDate}
        />
    );

    bodyRender = () => {
        const weeks = [];
        const date = this.props.start.clone();

        do {
            const weekDates = [];
            const weekKey = date.format('yyyy-w');

            for (let j = 0; j < 7; j++) {
                if (j < date.day() || date.isAfter(this.props.end, "date")) {
                    weekDates.push(
                        <div
                            key={date.format('yyyy-w') + j}
                            className={styles.hiddenDay}/>
                    );
                } else {
                    weekDates.push(this.dateRender(date.clone()));
                    date.add(1, "day");
                }
            }

            weeks.push((
                <div key={weekKey}
                     className={styles.week}>
                    {weekDates}
                </div>
            ));
        }
        while (this.props.currentDate.endOf('month').isSameOrAfter(date, 'date'));

        return weeks;
    };

    render() {

        return (<div>
            <CalendarHeader/>
            {this.bodyRender()}
            <Week/>
        </div>);

    }
}

function CalendarHeader(props) {
    return (<div className={styles.calendarHeader}>
        <span>S</span>
        <span>M</span>
        <span>T</span>
        <span>W</span>
        <span>T</span>
        <span>F</span>
        <span>S</span>
    </div>);

}
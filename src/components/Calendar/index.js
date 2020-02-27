import React, {Component} from 'react';
import CalendarNav from '../CalendarNav';
import CalendarBody from '../CalendarBody';
import styles from './Calendar.module.css';
import moment from "moment";

export default class Calendar extends Component {
    constructor(props) {
        super(props);
        const appModes = {
            week: 'week',
            month: 'month'
        };
        const defaultMode = appModes.month;
        const start = moment().startOf(defaultMode);
        const end = moment().endOf(defaultMode);

        this.state = {
            appMode: defaultMode,
            currentDate: moment(),
            start: start,
            end: end,
        }
    }

    render() {
        return (<div className={styles.container}>
            <CalendarNav
                currentMode={this.state.appMode}/>
            <CalendarBody
                start={this.state.start}
                end={this.state.end}
                currentDate={this.state.currentDate}
                currentMode={this.state.appMode}/>
        </div>);
    }
}
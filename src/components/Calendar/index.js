import React, {Component} from 'react';
import CalendarNav from '../CalendarNav';
import CalendarBody from '../CalendarBody';
import styles from './Calendar.module.scss';
import moment from 'moment';

export default class Calendar extends Component {
    /* constructor(props) {
         super(props);
         this.state = {
             appMode: 'month',
         };
     }*/
    constructor(props) {
        super(props);

        const modes = {
            week: 'week',
            month: 'month'
        };

        const defaultMode = modes.month;
        const start = moment().startOf(defaultMode);
        const end = moment().endOf(defaultMode);

        this.state = {
            appMode: defaultMode,
            currentDate: moment(),
            start: start,
            end: end,
        };
    }

    modeChanger = (value) => {
        this.setState({
            appMode: value,
            start: moment().startOf(value),
            end:moment().endOf(value)
        });
    };

    render() {

        const currentDate = this.state.currentDate.clone();
        const startDate = this.state.start.clone();
        const endDate = this.state.end.clone();
        const currentMode = this.state.appMode;


        return (<div className={styles.container}>
            <CalendarNav
                currentDate={currentDate}
                currentMode={currentMode}
                modeChanger={this.modeChanger}
            />
            <CalendarBody
                startDate={startDate}
                endDate={endDate}
                currentDate={currentDate}
                currentMode={currentMode}
            />
        </div>);
    }
}
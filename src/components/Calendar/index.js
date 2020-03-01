import React, {Component} from 'react';
import CalendarNav from '../CalendarNav';
import CalendarBody from '../CalendarBody';
import styles from './Calendar.module.scss';
import moment from 'moment';

export default class Calendar extends Component {
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

    setDate = (isNext) => {
        const startDate = this.state.start.clone();
        const endDate = this.state.end.clone();

        if (isNext) {
            this.setState({
                start: startDate.add(1, this.state.appMode).clone(),
                end: endDate.add(1, this.state.appMode).clone()
            });
        }
    };

    modeChanger = (value) => {
        this.setState({
            appMode: value,
            start: moment().startOf(value),
            end: moment().endOf(value)
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
                setDateHandler={this.setDate}
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
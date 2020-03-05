import React, {Component} from 'react';
import CalendarNav from '../CalendarNav';
import CalendarBody from '../CalendarBody';
import styles from './Calendar.module.scss';
import moment from 'moment';
import Week from "../Week";

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
            selectedDay: moment(),
            appMode: defaultMode,
            currentDate: moment(),
            start: start,
            end: end,
        };
    }

    setSelectedDay = (value) => {
        this.setState({
            selectedDay: value
        })
    };

    setDate = (isNext) => {
        const {start:startDate, end:endDate, appMode} = this.state;

        if (isNext) {
            this.setState({
                start: startDate.add(1, this.state.appMode),
                end: endDate.add(1, this.state.appMode).endOf(appMode)
            });
        } else {
            this.setState({
                start: startDate.subtract(1, this.state.appMode),
                end: endDate.subtract(1, this.state.appMode).endOf(appMode)
            })
        }

        this.setState({
            selectedDay: this.state.currentDate,
        })

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
                selectedDay={this.state.selectedDay}
                startDate={startDate}
                endDate={endDate}
                currentDate={currentDate}
                currentMode={currentMode}

                modeChanger={this.modeChanger}
                setDateHandler={this.setDate}
            />
            <CalendarBody
                selectDayHandler={this.setSelectedDay}
                selectedDay={this.state.selectedDay}

                startDate={startDate}
                endDate={endDate}
                currentDate={currentDate}
                currentMode={currentMode}
            />
        </div>);
    }
}
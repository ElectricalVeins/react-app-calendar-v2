import React, {Component} from 'react';
import CalendarNav from '../CalendarNav';
import CalendarBody from '../CalendarBody';
import styles from './Calendar.module.scss';
import moment from 'moment';

export default class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            appMode: 'month',
        };
    }

    modeChanger = (value) => {
        this.setState({
            appMode: value
        });
    };

    render() {

        const currentDate = moment();
        const startDate = currentDate.clone().startOf(this.state.appMode);
        const endDate = startDate.clone().endOf(this.state.appMode);


        return (<div className={styles.container}>
            <CalendarNav
                currentDate={currentDate}
                modeChanger={this.modeChanger}
                currentMode={this.state.appMode}/>
            <CalendarBody
                startDate={startDate}
                endDate={endDate}
                currentDate={currentDate}
                currentMode={this.state.appMode}
            />
        </div>);
    }
}
import React, {Component} from 'react';
import CalendarNav from '../CalendarNav';
import CalendarBody from '../CalendarBody';
import styles from './Calendar.module.scss';
import moment from 'moment';
import Week from "../Week";
import Events from '../Events';

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
            events:[],
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


    loadData=()=>{
        fetch('./events.json')
            .then(res => res.json())
            .then(obj=>this.setState({
                events: obj
            }))
    };

    componentDidMount() {
        this.loadData()
    }


    render() {

        return (<div className={styles.container}>
            <CalendarNav
                {...this.state}
                modeChanger={this.modeChanger}
                setDateHandler={this.setDate}
            />
            <CalendarBody
                selectDayHandler={this.setSelectedDay}
                {...this.state}
            />
          <Events events={this.state.events} />

        </div>);
    }
}
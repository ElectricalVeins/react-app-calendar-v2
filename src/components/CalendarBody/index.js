import React, {Component} from 'react';
import Week from '../Week';
import styles from './CalendarBody.module.scss';
import moment from 'moment';

export default class CalendarBody extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDay: moment()
        }
    }

    setSelectedDay = (value) => {
        this.setState({
            selectedDay: value
        })
    };

    dateCalc = () => {
        const weeks = [];
        const start = this.props.startDate;
        const startDate = start.clone().startOf('week');
        const currentDate = this.props.currentDate.clone();
        const endDate = this.props.endDate.clone();

        do {
            const weekDates = [];

            for (let i = 0; i < 7; i++) {
                weekDates.push(startDate.clone());
                startDate.add(1, 'day');
            }
            //debugger
            weeks.push((weekDates));
        } while (this.props.startDate.clone().endOf(this.props.currentMode).isSameOrAfter(startDate,
            'date'));


        return weeks;
    };

    bodyRender = () => {
        const weeks = this.dateCalc();
        const weekComponents = [];

        for (let week of weeks) {
            weekComponents.push(
                <Week
                    selectDayHandler={this.setSelectedDay}
                    selectedDay={this.state.selectedDay}
                    currentDay={this.props.currentDate.clone()}
                    startDate={this.props.startDate.clone()}
                    endDate={this.props.endDate.clone()}
                    week={week}
                    key={week[0].format('w')}
                />
            );
        }
        return weekComponents;

    };

    render() {

        return (<table>
            <CalendarHeader/>
            <tbody>
            {
                this.bodyRender()
            }
            </tbody>
        </table>);

    }
}

function CalendarHeader(props) {
    return (<thead className={styles.calendarHeader}>
    <tr>
        <th>S</th>
        <th>M</th>
        <th>T</th>
        <th>W</th>
        <th>T</th>
        <th>F</th>
        <th>S</th>
    </tr>
    </thead>);

}
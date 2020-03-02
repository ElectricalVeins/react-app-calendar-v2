import React, {Component} from 'react';
    import Week from '../Week';
import styles from './CalendarBody.module.scss';
import moment from 'moment';

export default class CalendarBody extends Component {
    constructor(props) {
        super(props);
    }

    dateCalc = () => {
        const weeks = [];
        const startDate = this.props.startDate.clone();

        do {
            const weekDates = [];

            for (let i = 0; i < 7; i++) {
                weekDates.push(startDate.clone());
                startDate.add(1, 'day');
            }
            weeks.push((weekDates));
        } while (this.props.currentDate.endOf(this.props.currentMode).isSameOrAfter(startDate,
            'date'));

        return weeks;
    };

    bodyRender = () => {
        const weeks = this.dateCalc();
        const weekComponents = [];

        for (let week of weeks) {
            weekComponents.push(
                <Week
                    currentDay={this.props.currentDate.clone()}
                    startDate={this.props.startDate.clone()}
                    endDate={this.props.endDate.clone()}
                    week={week}
                    key={week}/>
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
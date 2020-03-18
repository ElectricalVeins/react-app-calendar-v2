import React, {Component} from 'react';
import Day from '../Day';

export default class Week extends Component {
    constructor(props) {
        super(props);
    }

    weekRender = () => {
        const {week} = this.props;
        const days = [];
        for (let day of week) {
            days.push(<Day
                selectDayHandler={this.props.selectDayHandler}

                startDate={this.props.startDate.clone()}
                selectedDay={this.props.selectedDay}
                currentDay={this.props.currentDay}
                endDate={this.props.endDate.clone()}

                key={day.format('w-d')}
                day={day}
            />);
        }

        return days;
    };

    render() {
        return (<tr>
                {this.weekRender()}
            </tr>
        );
    }

}
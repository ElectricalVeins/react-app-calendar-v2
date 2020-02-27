import React, {Component} from 'react';

export default class Day extends Component {

    render() {

        const {date} = this.props;
        return (<div>
            {
                date.date()
            }
        </div>);
    }
}


/*
const EventItem = props => {
  const {event:{isIn}}=props;
  return <li className={classNames(styles.event,{[]}) {

  }} />;
};*/

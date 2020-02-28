import React, {Component} from 'react';
import styles from './NavMenu.module.scss';
import moment from "moment";

export default class NavMenu extends Component {
    constructor(props) {
        super(props);

    }

    monthRender = () => {
        return (<>
            <div>Previous month</div>
            <div onClick={this.props.handler}>Selected Month</div>
            <div>Next month</div>
        </>)
    };

    weekRender = () => {
        return (<>
                <div>Prev</div>
                <div onClick={this.props.handler}>{this.props.week}</div>
                <div>Next</div>
            </>
        )

    };

    render() {
        return (<div className={styles.navContainer}>
                {this.props.currentMode
                    ? this.monthRender()
                    : this.weekRender()
                }
            </div>
        );

    }
}
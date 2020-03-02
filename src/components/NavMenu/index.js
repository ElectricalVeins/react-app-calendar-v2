import React, {Component} from 'react';
import styles from './NavMenu.module.scss';
import moment from "moment";

export default class NavMenu extends Component {
    constructor(props) {
        super(props);

    }

    monthRender = () => {
        const {currentDate: date} = this.props;

        return (<>

            {
                //сделать 1 компонент кнопки
            }
            <div>
                {
                    date.clone().subtract(1, 'month').format('MMMM')
                }
            </div>
            <div onClick={this.props.handler}>
                {
                    date.format('MMMM')
                }
            </div>
            <div>
                {
                    date.clone().subtract(-1, 'month').format('MMMM')
                }
            </div>
        </>)
    };

    weekRender = () => {
        return (<>
                <div>Prev</div>
                <div onClick={this.props.handler}>
                    {
                        this.props.week
                    }
                </div>
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
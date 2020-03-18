import React, {Component} from 'react';
import styles from './NavMenu.module.scss';
import moment from "moment";

export default class NavMenu extends Component {

    setNextDateHandler=()=>{
        const isNext=true;
        this.props.setDateHandler(isNext)
    };

    setPrevDateHandler=()=>{
        const isNext=false;
        this.props.setDateHandler(isNext)
    };

    monthRender = () => {
        const {selectedDay: date} = this.props;

        return (<>
            {
                //сделать 1 компонент кнопки (button?)
            }
            <div onClick={this.setPrevDateHandler}>
                {
                    date.clone().subtract(1, 'month').format('MMMM')
                }
            </div>
            <div onClick={this.props.handler}>
                {
                    date.subtract(0, 'month').format('MMMM')
                }
            </div>
            <div onClick={this.setNextDateHandler} >
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
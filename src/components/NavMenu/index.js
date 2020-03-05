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
        const {selectedDay: selDate,start: prevMonth,end: NextMonth} = this.props;

        return (<>
            {
                //сделать 1 компонент кнопки (button?)
            }
            <div onClick={this.setPrevDateHandler}>
                {
                    prevMonth.clone().subtract(1, 'month').format('MMM')
                }
            </div>
            <div onClick={this.props.handler}>
                {
                    prevMonth.subtract(0, 'month').format('MMMM')
                }
            </div>
            <div onClick={this.setNextDateHandler} >
                {
                    NextMonth.clone().subtract(-1, 'month').format('MMM')
                }
            </div>
        </>)
    };

    isBorderOfMonth=()=>{
        const {start,end} = this.props;
        const monthName =  start.format('MMMM');
        if(end.isSame(start,'month')){
           return `${monthName} ${start.date()}-${end.date()}`
        }else{
          return  `${monthName} ${start.date()} - ${end.format('MMMM')} ${end.date()}`
        }
    };

    weekRender = () => {
        return (<>
                <div onClick={this.setPrevDateHandler} >Prev</div>
                <div onClick={this.props.handler}>
                    {
                       this.isBorderOfMonth()
                    }
                </div>
                <div onClick={this.setNextDateHandler} >Next</div>
            </>
        )

    };

    render() {
        return (<div className={styles.navContainer}>
                {this.props.appMode === 'month'
                   ? this.monthRender()
                    : this.weekRender()
                }
            </div>
        );

    }
}
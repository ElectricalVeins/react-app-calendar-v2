import React, {Component} from 'react';
import NavMenu from '../NavMenu';
import styles from './CalendarNav.module.scss';

export default class CalendarNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpenModeChanger: false
        };
    }

    clickHandler = () => {
        this.setState({
            isOpenModeChanger: !this.state.isOpenModeChanger
        });
    };

    render() {
        return (<div className={styles.navContainer}>
                <NavMenu
                    currentMode={this.props.currentMode}
                    currentDate={this.props.currentDate}
                    handler={this.clickHandler}
                    setDateHandler={this.props.setDateHandler}


                />
                <div
                    className={styles.modeChangerWrapper}
                >

                    <ModeChanger

                        modeChanger={this.props.modeChanger}
                        isOpen={this.state.isOpenModeChanger}
                        type={'week'}
                    />

                    <ModeChanger
                        modeChanger={this.props.modeChanger}
                        isOpen={this.state.isOpenModeChanger}
                        type={'month'}
                    />
                </div>

            </div>
        );
    }
}

//

class ModeChanger extends Component {

    handleChange = () => {
        this.props.modeChanger(this.props.type)
    };

    bodyRender = () => {
        if (this.props.type === 'month') {
            return (<p>
                This Month
            </p>)
        } else {
            return (<p>
                This Week
            </p>)
        }
    };

    render() {

        return (

            <div
                className={this.props.isOpen
                    ? styles.modeChangerOpen
                    : styles.modeChangerClosed}

                onClick={this.handleChange}
            >
                {this.bodyRender()}
            </div>
        );
    }


}
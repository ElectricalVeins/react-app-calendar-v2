import React, {Component} from 'react';
import NavMenu from '../NavMenu';
import styles from './CalendarNav.module.scss';
import ModeChangerButton from "../ModeChangerButton";

export default class CalendarNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpenModeChanger: false
        };
        this.toggleContainer = React.createRef();
    }

    clickHandler = () => {
        this.setState({
            isOpenModeChanger: !this.state.isOpenModeChanger
        });
    };

    componentDidMount = () => {
        window.addEventListener('click', this.onClickOutsideHandler);
    };

    componentWillUnmount = () => {
        window.removeEventListener('click', this.onClickOutsideHandler);
    };

    onClickOutsideHandler = (event) => {
        if (this.state.isOpenModeChanger && !this.toggleContainer.current.contains(event.target)) {
            this.setState({isOpenModeChanger: false});
        }
    };

    render() {
        return (<div className={styles.navContainer}
                     ref={this.toggleContainer}>
                <NavMenu
                    currentMode={this.props.currentMode}
                    currentDate={this.props.currentDate}
                    handler={this.clickHandler}
                    setDateHandler={this.props.setDateHandler}

                />
                <div className={styles.modeChangerWrapper}>

                    <ModeChangerButton

                        modeChanger={this.props.modeChanger}
                        isOpen={this.state.isOpenModeChanger}
                        type={'week'}
                    />

                    <ModeChangerButton
                        modeChanger={this.props.modeChanger}
                        isOpen={this.state.isOpenModeChanger}
                        type={'month'}
                    />
                </div>

            </div>
        );
    }
}



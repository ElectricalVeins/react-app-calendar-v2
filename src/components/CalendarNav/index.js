import React, { Component } from 'react';
import NavMenu from '../NavMenu';
import styles from './CalendarNav.module.css';

export default class CalendarNav extends Component {
  constructor (props) {
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

  render () {
    return (<div className={styles.navContainer}>
        <NavMenu handler={this.clickHandler} currentMode={this.props.currentMode} />
        <ModeChange  isOpen={this.state.isOpenModeChanger}/>
      </div>
    );
  }
}

//

function ModeChange (props) {
  return (<div className={props.isOpen
                          ? styles.modeChangerOpen
                          : styles.modeChangerClosed}>
    <div>This Week</div>
    <div>This Month</div>
  </div>);

}
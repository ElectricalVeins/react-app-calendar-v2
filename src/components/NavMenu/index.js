import React, { Component } from 'react';
import styles from './NavMenu.module.css';
export default class NavMenu extends Component {
  constructor (props) {
    super(props);

  }

  render () {

    return (<div className={styles.navContainer}>
        <div>Prev</div>
        <div onClick={this.props.handler}>Week</div>
        <div>Next</div>
      </div>
    );

  }
}
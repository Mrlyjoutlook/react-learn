import React, { Component } from 'react';
import styles from './index.module.css';

class Container extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div>css-modules</div>
        <div>你可以打开开发者工具，查看html代码</div>
      </div>
    );
  }
}

export default Container;

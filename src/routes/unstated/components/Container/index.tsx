import React, { Component } from 'react';
import ContexTest from '../ContexTest';
import UnstatedTest from '../UnstatedTest';

class Container extends Component {
  render() {
    return (
      <div>
        <h1>状态管理</h1>
        <h2>React Context</h2>
        <ContexTest />
        <h2>Unstated lib</h2>
        <UnstatedTest />
      </div>
    );
  }
}

export default Container;

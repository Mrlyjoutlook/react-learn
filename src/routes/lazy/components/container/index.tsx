import React, { Component } from 'react';
import PreText from '../PreText';

interface State {
  showText: boolean;
}

interface Props {}

class Lazy extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      showText: false
    };
  }
  render() {
    const { showText } = this.state;
    return (
      <div>
        <div>懒加载</div>
        <div>预加载</div>
        <div>预渲染</div>
        {showText && <PreText text="渲染方式" />}
      </div>
    );
  }
}

export default Lazy;

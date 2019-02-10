import React, { Component } from 'react';

interface Props {
  text: string;
}

class PreText extends Component<Props> {
  render() {
    const { text } = this.props;
    return <div>{text}</div>;
  }
}

export default PreText;

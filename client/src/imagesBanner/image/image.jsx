import React from 'react';

import styles from '../../../style/style.jsx';
const { Li, Img } = styles;


class Image extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    //this.functionName = this.functionName.bind(this);

  }


  render() {
    return (<Li>
      <Img src={this.props.url} />

    </Li >)
  }
}

export default Image;
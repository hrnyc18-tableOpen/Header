import React from 'react';

import Image from './image/image.jsx';

import styles from '../../style/style.jsx';
const { Ul, BannerImages } = styles;


class ImagesBanner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    //this.functionName = this.functionName.bind(this);

  }


  render() {
    // if (this.props.images.length < 6) {
    //   let pattern = <
    // }
    return (<BannerImages>
      <Ul>
        {this.props.images.map(url => <Image url={url} />)}
      </Ul>
    </BannerImages>)
  }
}

export default ImagesBanner;
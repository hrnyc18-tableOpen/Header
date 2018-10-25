import React from 'react';

import Image from './image/image.jsx';

import styles from '../../style/style.jsx';
const { Ul, BannerImages } = styles;


class ImagesBanner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        "https://resizer.otstatic.com/v2/photos/large/24010777.jpg",
        "https://resizer.otstatic.com/v2/photos/large/24010777.jpg",
        "https://resizer.otstatic.com/v2/photos/large/23872837.jpg",
        "https://ot-foodspotting-production.s3.amazonaws.com/reviews/654855/thumb_600.jpg",
        "https://ot-foodspotting-production.s3.amazonaws.com/reviews/4331043/thumb_600.jpg",
        "https://ot-foodspotting-production.s3.amazonaws.com/reviews/4331079/thumb_600.jpg"
      ]
    }
    //this.functionName = this.functionName.bind(this);

  }


  render() {
    return (<BannerImages>
      <Ul>
        {this.state.images.map(url => <Image url={url} />)}
      </Ul>
    </BannerImages>)
  }
}

export default ImagesBanner;
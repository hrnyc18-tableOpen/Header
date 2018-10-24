import React from 'react';

import Image from './image/image.jsx';



class ImagesBanner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    //this.functionName = this.functionName.bind(this);

  }


  render() {
    return (<div>
      <Image all={this.state} />
    </div>)
  }
}

export default ImagesBanner;
import React from 'react';

import styles from '../../style/style.jsx';
const { Banner, Ul, Li, Logo } = styles;


class LocationBanner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    //this.functionName = this.functionName.bind(this);

  }


  render() {
    return (<Banner>
      <Ul>
        <Li><Logo src="http://brand.opentable.com/wp-content/uploads/2015/03/OTLogo_fullhor_r1a-01.png" alt="..." /></Li>
        <Li>Test</Li>
      </Ul>
    </Banner>
    )
  }
}

export default LocationBanner;
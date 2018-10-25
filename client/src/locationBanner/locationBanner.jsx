import React from 'react';
import Location from './location/location.jsx';

import styles from '../../style/style.jsx';
const { BannerLocation, Ul, Li, ArrowGray, ArrowWhite, LiArrow, CenterContainer, Center } = styles;


class LocationBanner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: ['Home', 'United States', 'New York / Tri-State Area', 'Manhattan', 'Theater District / Times Square'],
    }
    //this.functionName = this.functionName.bind(this);

  }


  render() {
    return (<BannerLocation>
      <Ul>
        {this.state.locations.map(location => <Location location={location} />)}
      </Ul>
    </BannerLocation>
    )
  }
}

export default LocationBanner;
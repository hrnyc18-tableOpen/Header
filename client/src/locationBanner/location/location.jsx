import React from 'react';

import styles from '../../../style/style.jsx';
const { BannerLocation, Ul, Li, ArrowGray, ArrowWhite, LiArrow, CenterContainer, Center } = styles;


class Location extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    //this.functionName = this.functionName.bind(this);

  }


  render() {
    return (<React.Fragment>
      <LiArrow>
        <CenterContainer>
          <Center>
            {this.props.location}
          </Center>
        </CenterContainer>
      </LiArrow>
      <LiArrow>
        <ArrowGray></ArrowGray>
      </LiArrow>
      <LiArrow>
        <ArrowWhite></ArrowWhite>
      </LiArrow>
    </React.Fragment>
    );
  }
}

export default Location;
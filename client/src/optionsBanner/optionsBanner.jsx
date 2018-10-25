import React from 'react';

import styles from '../../style/style.jsx';
const { GrayBanner, RightUl, Li } = styles;



class OptionsBanner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    //this.functionName = this.functionName.bind(this);

  }

  render() {
    return (<GrayBanner>
      <RightUl>
        <Li>For Restauranteurs</Li>
        <Li>Mobile</Li>
        <Li>Help</Li>
        <Li>EN</Li>
      </RightUl>
    </GrayBanner>)
  }


}

export default OptionsBanner;


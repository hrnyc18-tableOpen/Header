import React from 'react';

import styles from '../../style/style.jsx';
const { BannerOptions, UlRight, Li, Center, CenterContainer } = styles;



class OptionsBanner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    //this.functionName = this.functionName.bind(this);

  }

  render() {
    return (<BannerOptions>
      <UlRight>
        <Li>
          <CenterContainer>
            <Center>
              For Restauranteurs
          </Center>
          </CenterContainer>
        </Li>
        <Li>
          <CenterContainer>
            <Center>
              Mobile
          </Center>
          </CenterContainer>
        </Li>
        <Li>
          <CenterContainer>
            <Center>
              Help
          </Center>
          </CenterContainer>
        </Li>
        <Li>
          <CenterContainer>
            <Center>
              EN
          </Center>
          </CenterContainer>
        </Li>
      </UlRight>
    </BannerOptions>)
  }


}

export default OptionsBanner;


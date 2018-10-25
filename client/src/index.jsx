import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import ImagesBanner from './imagesBanner/imagesBanner.jsx';
import LocationBanner from './locationBanner/locationBanner.jsx';
import OptionsBanner from './optionsBanner/optionsBanner.jsx';
import TitleBanner from './titleBanner/titleBanner.jsx';

// import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    //this.functionName = this.functionName.bind(this);

  }


  render() {
    return (<div>
      <OptionsBanner id="optionsBanner" all={this.state} />
      <LocationBanner all={this.state} />
      <TitleBanner all={this.state} />
      <ImagesBanner all={this.state} />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));





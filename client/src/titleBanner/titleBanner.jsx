import React from 'react';

import MetroDropdown from './metroDropdown/metroDropdown.jsx';
import Search from './search/search.jsx';
import SignIn from './signIn/signIn.jsx';
import SignUp from './signUp/signUp.jsx';



class TitleBanner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    //this.functionName = this.functionName.bind(this);

  }


  render() {
    return (<div>
      <MetroDropdown all={this.state} />
      <Search all={this.state} />
      <SignIn all={this.state} />
      <SignUp all={this.state} />
    </div>)
  }
}

export default TitleBanner;
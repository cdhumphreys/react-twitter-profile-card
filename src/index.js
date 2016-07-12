import React from 'react';
import ReactDOM from 'react-dom';

import './styles.css';
// require('./styles.css');
import TwitterTest from './Components/TwitterTest';

class App extends React.Component {

  render() {
    return (
      <div>
        <TwitterTest link={'https://api.twitter.com/1.1/users/lookup.json?screen_name=johngreen&include_entities=false'} />
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));

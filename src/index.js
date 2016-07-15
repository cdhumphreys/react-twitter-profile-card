import React from 'react';
import ReactDOM from 'react-dom';

import './styles.css';

import TwitterWrapper from './Components/TwitterWrapper';

  var user_id = '18055737',
  screen_name = 'johngreen';
class App extends React.Component {

  render() {
    return (
      <div>
        <TwitterWrapper screen_name={"johngreen"} user_id={18055737}/>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));

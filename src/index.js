import React from 'react';
import ReactDOM from 'react-dom';

import './styles.css';

import TwitterTest from './Components/TwitterWrapper';


class App extends React.Component {

  render() {
    return (
      <div>
        <TwitterTest />
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));

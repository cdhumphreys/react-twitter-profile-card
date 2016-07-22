import React from 'react';
import ReactDOM from 'react-dom';

import './styles.css';

import TwitterWrapper from './Components/TwitterWrapper';




class App extends React.Component {
  constructor() {
    super();
    this.state = {
      profiles: [
          { screen_name: "johngreen", user_id: 18055737 },
          { screen_name: "dan_abramov", user_id: 70345946 }
        ]
      };


  }
  getRandomRGB() {
    const red = Math.floor((Math.random() * 255) + 1);
    const green = Math.floor((Math.random() * 255) + 1);
    const blue = Math.floor((Math.random() * 255) + 1);
    return `rgba(${red},${green},${blue},0.4)`;

  }

  clickHandler(e) {
    e.preventDefault();

    const input_screen_name = this.refs.input_screen_name.value;
    const input_user_id = this.refs.input_user_id.value;

  const newState = {
    profiles: [
      ...this.state.profiles,
      {
        screen_name: input_screen_name,
        user_id: input_user_id
      }
    ]
  };

    this.setState(newState);

    this.refs.input_screen_name.value = '';
    this.refs.input_user_id.value = '';


  }

  makeTwitterElements() {
    return this.state.profiles.map((profile, index) => {
        return <TwitterWrapper screen_name={profile.screen_name} user_id={profile.user_id} key={index} rgb1={this.getRandomRGB()} rgb2={this.getRandomRGB()}/>
      });

  }

  render() {

  const twitterProfilesWrapped = this.makeTwitterElements();

    return (
      <div>
        <form id="newCardForm">
          <input type="text" placeholder="Enter Your Screen Name" ref="input_screen_name"/>
          <input type="text" placeholder="Enter Your User ID" ref="input_user_id"/>
          <button onClick={this.clickHandler.bind(this)}>Make</button>
        </form>
        {twitterProfilesWrapped}
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));

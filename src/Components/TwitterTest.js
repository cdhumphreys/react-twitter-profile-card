import React from 'react';

class TwitterTest extends React.Component {
  constructor() {
    super();
    // state: {
    //   name: '',
    //   screenName: '',
    //   followers: null,
    //   likes: null,
    //   location: ''
    // };
    state: {
      data: '' 
    };
  }

  componentWillMount() {

      const promise = new Promise(function(resolve, reject) {
        const req = new XMLHttpRequest();
        req.open('GET', this.props.link);

        req.onload = function() {
          if (req.status === 200) {
            resolve(req.response);
          }
          else {
            reject(Error(req.statusText));
          }
        };
        req.onerror = function() {
          reject(Error("Network Error"));
        };

      req.send();
      }.bind(this));

      promise.then(function(response) {
        console.log("Success!", response);
      },
      function(error) {
        console.error("Failed", error);
      }
    );
  }

  componentWillUnmount() {
      this.serverRequest.abort();
  }

  render() {
    return (
      <div>
        {this.state.data}
      </div>
    )
  }
}

export default TwitterTest;

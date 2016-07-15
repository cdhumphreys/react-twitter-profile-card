import React from 'react';

import twitterConfig from '../../twitterConfig';
import TwitterCard from './TwitterCard';

class TwitterWrapper extends React.Component {
  constructor() {
    super();

    this.state = {
      data: ''
    };
    console.log(twitterConfig);
    this.makeTwitterPromise = function(user_id, screen_name, count, base_url) {
      const baseTwitterApiUrl = 'http://54.229.56.139/proxy/twitter_proxy.php';

      let twitterApiRequest = baseTwitterApiUrl + '?';
      twitterApiRequest += 'oauth_access_token=' + twitterConfig.oauth_access_token;
      twitterApiRequest += '&oauth_access_token_secret=' + twitterConfig.oauth_access_token_secret;
      twitterApiRequest += '&consumer_key=' + twitterConfig.consumer_key;
      twitterApiRequest += '&consumer_secret=' + twitterConfig.consumer_secret;

      twitterApiRequest += '&user_id=' + user_id;
      twitterApiRequest += '&screen_name=' + screen_name;
      twitterApiRequest += '&count=' + count;
      twitterApiRequest += '&base_url=' + base_url;


        return new Promise(function(resolve, reject) {
          const req = new XMLHttpRequest();
          req.open('GET', twitterApiRequest);

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
      });
    };
  }



  componentWillMount() {
    var  user_id = '18055737',
      screen_name = 'johngreen',
      count = 5,
      base_url = 'users/lookup.json';

    var newTwitterPromise = this.makeTwitterPromise(user_id, screen_name, count, base_url);

     newTwitterPromise.then((response) => {
         console.log("Success!");
         
         const data = JSON.parse(response)[0];

         this.setState({
           data
         });
       },
       (error) => {
         console.error("Failed", error);
       }
    );

  }

  render() {
    return (
      <div>
        <TwitterCard {...this.state.data}/>
      </div>
    )
  }
}

export default TwitterWrapper;

import React from 'react';

import twitterConfig from '../../twitterConfig';
import TwitterCard from './TwitterCard';

class TwitterWrapper extends React.Component {
  constructor() {
    super();

    this.state = {
      data: ''
    };




  }

  makeTwitterPromise(user_id, screen_name, count, base_url) {
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
  }

  numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  componentWillMount() {
    var count = 5,
      base_url = 'users/lookup.json';


    var newTwitterPromise = this.makeTwitterPromise(this.props.user_id, this.props.screen_name, count, base_url);

     newTwitterPromise.then((response) => {
         const data = JSON.parse(response)[0];

         const imgUrl = data.profile_image_url;
         const uncompressedProfileImg = imgUrl.slice(0,imgUrl.indexOf('_normal')) + imgUrl.slice(imgUrl.indexOf('_normal') + ('_normal').length);

         data.uncompressedProfileImg = uncompressedProfileImg;

         data.formattedLikes = this.numberWithCommas(data.favourites_count);
         data.formattedFollowers = this.numberWithCommas(data.followers_count);
         data.formattedFollowing = this.numberWithCommas(data.friends_count);
         data.formattedNumTweets = this.numberWithCommas(data.statuses_count);

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
        <TwitterCard className="twitter-card-wrapper"
          author_name={this.state.data.name}
          screen_name={this.state.data.screen_name}
          profile_image_url={this.state.data.uncompressedProfileImg}
          description={this.state.data.description}
          num_likes={this.state.data.formattedLikes}
          followers_count={this.state.data.formattedFollowers}
          following_count={this.state.data.formattedFollowing}
          num_tweets={this.state.data.formattedNumTweets}
          rgb1={this.props.rgb1}
          rgb2={this.props.rgb2}
        />
    )
  }

}

export default TwitterWrapper;

import React from 'react';

class TwitterCard extends React.Component {
  render() {
    console.log(this.props);
    return (
    <ul>
      <li><img src={this.props.profile_image_url}/></li>
      <li>Name: {this.props.screen_name}</li>
      <li>Description: {this.props.description}</li>
      <li>Likes: {this.props.favourites_count}</li>
      <li>Followers: {this.props.followers_count}</li>
      <li>Friends: {this.props.friends_count}</li>
    </ul>
  )
  }
}

export default TwitterCard;

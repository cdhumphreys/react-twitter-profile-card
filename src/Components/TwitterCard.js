import React from 'react';

class TwitterCard extends React.Component {
  render() {
    console.log(this.props.profile_image_url);
    return (
    <div className="card-container">
        <div className="image-container">
          <div className="profile-image" style={
            {
              backgroundImage: `url(${this.props.profile_image_url})`
            }
          }>
          </div>
        </div>
        <div className="text-container">
          <div>Name: {this.props.screen_name}</div>
          <div>Description: {this.props.description}</div>
          <div>Likes: {this.props.favourites_count}</div>
          <div>Followers: {this.props.followers_count}</div>
          <div>Friends: {this.props.friends_count}</div>
        </div>
    </div>
  )
  }
}

export default TwitterCard;

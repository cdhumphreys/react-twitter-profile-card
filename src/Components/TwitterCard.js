import React from 'react';

class TwitterCard extends React.Component {
  getRandomRGB() {
    const red = Math.floor((Math.random() * 255) + 1);
    const green = Math.floor((Math.random() * 255) + 1);
    const blue = Math.floor((Math.random() * 255) + 1);
    return `rgba(${red},${green},${blue},0.4)`;

  }
  render() {
    return (
    <div className="card-container">

        <div className="image-container">
          <div className="profile-image" style={
            {
              backgroundImage: `linear-gradient(to bottom,`+this.getRandomRGB()+`,`+this.getRandomRGB()+`), url(${this.props.profile_image_url})`
            }
          }>

            <div className="profile-stats-container">
              <div className="profile-names">
                <h2>{this.props.author_name}</h2>
                <h3>@{this.props.screen_name}</h3>
              </div>
              <div className="stats-container">
                <div className="stat">
                  <h4>Likes</h4>
                  <h3>{this.props.num_likes}</h3>
                </div>

                <div className="stat">
                  <h4>Followers</h4>
                  <h3>{this.props.followers_count}</h3>
                </div>

                <div className="stat">
                  <h4>Following</h4>
                  <h3>{this.props.following_count}</h3>
                </div>
              </div>

            </div>

          </div>
        </div>

        <div className="text-container">

          <div>Description: {this.props.description}</div>

        </div>
    </div>
  )
  }
}

export default TwitterCard;

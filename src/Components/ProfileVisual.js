import React from 'react';

class ProfileVisual extends React.Component {
  render() {
    return (
      <div className="image-container">
        <div className="profile-image" style={
          {
            backgroundImage: `linear-gradient(to bottom, ${this.props.rgb1}, ${this.props.rgb2}), url(${this.props.profile_image_url})`
          }
        }>

          <div className="profile-stats-container">
            <div className="profile-names">
              <h2>{this.props.author_name}</h2>
              <h4>@{this.props.screen_name}</h4>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default ProfileVisual;

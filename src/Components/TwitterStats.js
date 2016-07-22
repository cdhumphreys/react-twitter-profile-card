import React from 'react';

class TwitterStats extends React.Component {
  render() {
    return (
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
          <h4>Tweets</h4>
          <h3>{this.props.num_tweets}</h3>
        </div>
      </div>
    )
  }
}

export default TwitterStats;

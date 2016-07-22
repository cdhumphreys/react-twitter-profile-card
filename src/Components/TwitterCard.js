import React from 'react';

import DescriptionButton from './DescriptionButton';
import TwitterStats from './TwitterStats';
import ProfileVisual from './ProfileVisual';
import DescriptionOverlay from './DescriptionOverlay';

class TwitterCard extends React.Component {
  constructor() {
    super();
    this.state = {
      showDescription: ''
    }
  }

  clickHandler() {
    this.setState({
      showDescription: this.state.showDescription == 'active' ? '' : 'active'
    });
  }
  render() {
    return (
    <div className="card-container">
        <ProfileVisual {...this.props} rgb1={this.props.rgb1} rgb2={this.props.rgb2}/>
        <DescriptionButton clickHandler={this.clickHandler.bind(this)}/>
        <TwitterStats {...this.props} />
        <DescriptionOverlay description={this.props.description} active={this.state.showDescription} clickHandler={this.clickHandler.bind(this)}/>

    </div>

  )
  }
}

export default TwitterCard;

import React from 'react';

class DescriptionOverlay extends React.Component {

  render() {
    return(
      <div className={"description-overlay-wrapper " + this.props.active} >
        <div className="description-overlay" >
          <div>{this.props.description}</div>
        </div>
        <div onClick={this.props.clickHandler} className="close-description">X</div>
      </div>
    )
  }
}

export default DescriptionOverlay;

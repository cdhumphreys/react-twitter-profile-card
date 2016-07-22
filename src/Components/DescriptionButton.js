import React from 'react';

class DescriptionButton extends React.Component {
  render() {
    return (
      <div className="description-button" onClick={this.props.clickHandler}>
        <div className="info">
          &#8505;
        </div>
      </div>
    )
  }
}

export default DescriptionButton;

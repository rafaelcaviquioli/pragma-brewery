import React from 'react';

class Temperature extends React.PureComponent {
  render() {
    return (
      <span>{this.props.temperature}°C</span>
    );
  }
}

export default Temperature;

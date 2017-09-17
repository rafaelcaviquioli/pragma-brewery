import React from 'react';

class Temperature extends React.PureComponent {
  render() {
    return (
      <span>{this.props.value}°C</span>
    );
  }
}

export default Temperature;

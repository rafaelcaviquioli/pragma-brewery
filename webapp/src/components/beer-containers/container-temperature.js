import React from 'react';
import styles from './styles.scss';
import Card from 'components/card';

class ContainerTemperature extends React.PureComponent {
  render() {
    const container = this.props;

    return (
      <Card className={`${styles.col} ${container.outOfRange && styles.outOfRange}`}>
        <h2>{container.beer}</h2>
        <hr/>
        {container.temperature ?
          <h3>{`${container.temperature}°C`}</h3> :
          <h4>waiting thermometer</h4>}
        <small>{container.minTemperature}°C - {container.maxTemperature}°C</small>
      </Card>
    );
  }
}


export default ContainerTemperature;

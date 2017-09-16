import React from 'react';
import styles from './styles.scss';
import Card from 'components/card';

class ContainerTemperature extends React.PureComponent {
  render() {
    const container = this.props;

    return (
      <Card className={styles.col}>
        <h2>{container.name}</h2>
        <hr/>
        <h3>{container.temperature}°C</h3>
        <small>{container.minTemperature}°C - {container.maxTemperature}°C</small>
      </Card>
    );
  }
}


export default ContainerTemperature;

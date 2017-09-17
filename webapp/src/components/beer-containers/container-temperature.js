import React from 'react';
import { toast } from 'react-toastify';
import Card from 'components/card';
import styles from './styles.scss';

class ContainerTemperature extends React.PureComponent {
  render() {
    const container = this.props;

    if (container.outOfRange) {
      toast.warn(`${container.beer} is out of temperature range!`);
    }

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

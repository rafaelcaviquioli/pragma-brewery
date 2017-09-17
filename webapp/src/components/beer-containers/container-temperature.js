import React from 'react';
import { toast } from 'react-toastify';
import Card from 'components/card';
import Temperature from './temperature';
import styles from './styles.scss';

class ContainerTemperature extends React.PureComponent {
  componentDidUpdate() {
    const container = this.props;

    if (container.outOfRange) {
      toast.warn(`${container.beer} is out of temperature range!`);
    }
  }

  render() {
    const container = this.props;

    const containerTemperature = container.temperature ?
      <h3><Temperature temperature={container.temperature}/></h3> :
      <h4>waiting thermometer</h4>;

    return (
      <Card className={`${styles.col} ${container.outOfRange ? styles.outOfRange : ''}`}>
        <h2>{container.beer}</h2>
        <hr/>
        {containerTemperature}
        <small>
          <Temperature temperature={container.minTemperature}/> - <Temperature temperature={container.maxTemperature}/>
        </small>
      </Card>
    );
  }
}


export default ContainerTemperature;

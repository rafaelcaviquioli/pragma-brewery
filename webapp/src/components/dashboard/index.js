import React from 'react';
import BeerTemperature from 'components/beer-containers';

class Dashboard extends React.PureComponent {
  render() {
    return (
      <div>
        <div className="container">
          <BeerTemperature/>
        </div>
      </div>
    );
  }
}

export default Dashboard;

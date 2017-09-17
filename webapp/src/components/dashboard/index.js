import React from 'react';
import BeerContainers from 'components/beer-containers';

class Dashboard extends React.PureComponent {
  render() {
    return (
      <div>
        <div className="container">
          <BeerContainers/>
        </div>
      </div>
    );
  }
}

export default Dashboard;

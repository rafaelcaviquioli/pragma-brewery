import React from 'react';
import { connect } from 'react-redux';
import { selectContainers } from "state/beer-containers/selectors";
import ContainerTemperature from './container-temperature';

class BeerContainers extends React.PureComponent {
  render() {
    const ContainerList = this.props.containers.map((beer, index) =>
      <div key={index} className='col-md-4'>
        <ContainerTemperature {...beer}/>
      </div>
    );

    return (
      <div className="row">
        {ContainerList}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ containers: selectContainers(state) });
const reduxHOC = connect(mapStateToProps);

export default reduxHOC(BeerContainers);

import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import createStore from 'state/create-store';
import BeerContainers from 'components/beer-containers';
import ContainerTemperature from 'components/beer-containers/container-temperature';

describe('<BeerContainers />', () => {
  it('renders a container temperature for each container', () => {
    const containers = [
      { id: 1, beer: 'Beer 1', temperature: 5, minTemperature: 4, maxTemperature: 6, outOfRange: false },
      { id: 2, beer: 'Beer 2', temperature: 5, minTemperature: 4, maxTemperature: 6, outOfRange: false },
    ];
    const store = createStore({ beerContainers: { containers } });

    const wrapper = mount(
      <Provider store={store}>
        <BeerContainers/>
      </Provider>
    );

    expect(wrapper.find(ContainerTemperature).length).toEqual(2);
  });

  it('pass the container to container temperature', () => {
    const containers = [{ id: 1, beer: 'Beer 1', temperature: 5, minTemperature: 4, maxTemperature: 6, outOfRange: false }];
    const store = createStore({ beerContainers: { containers } });

    const wrapper = mount(
      <Provider store={store}>
        <BeerContainers/>
      </Provider>
    );

    expect(wrapper.find(ContainerTemperature).props()).toEqual({
      id: 1,
      beer: 'Beer 1',
      temperature: 5,
      minTemperature: 4,
      maxTemperature: 6,
      outOfRange: false
    });
  });
});

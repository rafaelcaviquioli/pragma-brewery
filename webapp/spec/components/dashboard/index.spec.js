import React from 'react';
import { shallow } from 'enzyme';
import Dashboard from 'components/dashboard';
import BeerContainers from 'components/beer-containers';

describe('<Dashboard />', () => {
  it('renders a BeerContainers', () => {
    const wrapper = shallow(<Dashboard/>);
    expect(wrapper.find(BeerContainers).length).toEqual(1);
  });
});

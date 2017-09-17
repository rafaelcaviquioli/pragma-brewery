import React from 'react';
import { shallow } from 'enzyme';
import Temperature  from 'components/beer-containers/temperature';

describe('<Temperature />', () => {
  it('renders the value with temperature sign', () => {
    const wrapper = shallow(<Temperature value="10"/>);
    expect(wrapper.text()).toEqual('10°C');
  });
});

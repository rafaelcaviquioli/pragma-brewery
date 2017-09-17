import React from 'react';
import { shallow } from 'enzyme';
import Navbar from 'components/navbar';

describe('<Navbar />', () => {
  it('renders the brand\'s name', () => {
    const wrapper = shallow(<Navbar/>);
    expect(wrapper.text()).toContain('Pragma Brewery');
  });
});

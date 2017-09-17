import React from 'react';
import { shallow } from 'enzyme';
import { ToastContainer } from 'react-toastify';
import App from 'components/app';
import Dashboard from 'components/dashboard';
import Navbar from 'components/navbar';

describe('<App />', () => {
  it('renders a Navbar', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.find(Navbar).length).toEqual(1);
  });

  it('renders a Dashboard', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.find(Dashboard).length).toEqual(1);
  });

  it('renders a ToasterContainer', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.find(ToastContainer).length).toEqual(1);
  });
});

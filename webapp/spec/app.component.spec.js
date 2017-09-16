import React from 'react';
import { shallow } from 'enzyme';
import App from './../src/app.component';

describe('<App />', () => {
  it('shows "My Feature"', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.text()).toContain('My Feature');
  });
});
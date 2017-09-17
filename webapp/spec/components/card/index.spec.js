import React from 'react';
import { shallow } from 'enzyme';
import Card from 'components/card';

describe('<Card />', () => {
  it('renders they children', () => {
    const wrapper = shallow(<Card><span>Something</span></Card>);
    expect(wrapper.text()).toEqual('Something');
  });

  it('renders all passed properties', () => {
    const wrapper = shallow(<Card my-property="some value"><span>Something</span></Card>);
    expect(wrapper.find('[my-property="some value"]').length).toEqual(1);
  });

  it('concat the passed class with they own', () => {
    const wrapper = shallow(<Card className="my-class"><span>Something</span></Card>);
    expect(wrapper.find('.my-class').props()).toMatchObject({ className: 'card my-class' });
  });
});

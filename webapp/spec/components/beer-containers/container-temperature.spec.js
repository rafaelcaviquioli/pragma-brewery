import React from 'react';
import { mount, shallow } from 'enzyme';
import { toast } from 'react-toastify';
import ContainerTemperature from 'components/beer-containers/container-temperature';

describe('<ContainerTemperature />', () => {
  it('renders the container\'s temperature range', () => {
    const container = {
      id: 1, beer: 'Beer 1', temperature: 5, minTemperature: 4, maxTemperature: 6, outOfRange: false
    };
    const wrapper = mount(<ContainerTemperature {...container}/>);
    expect(wrapper.text()).toContain('4°C - 6°C');
  });

  it('renders the container\'s temperature', () => {
    const container = {
      id: 1, beer: 'Beer 1', temperature: 5, minTemperature: 4, maxTemperature: 6, outOfRange: false
    };
    const wrapper = mount(<ContainerTemperature {...container}/>);
    expect(wrapper.text()).toContain('5°C');
  });

  it('renders the container\'s beer', () => {
    const container = {
      id: 1, beer: 'Beer 1', temperature: 5, minTemperature: 4, maxTemperature: 6, outOfRange: false
    };
    const wrapper = mount(<ContainerTemperature {...container}/>);
    expect(wrapper.text()).toContain('Beer 1');
  });

  it('renders the container\'s id', () => {
    const container = {
      id: 1, beer: 'Beer 1', temperature: 5, minTemperature: 4, maxTemperature: 6, outOfRange: false
    };
    const wrapper = mount(<ContainerTemperature {...container}/>);
    expect(wrapper.text()).toContain('container 1');
  });

  describe('waiting thermometer', () => {
    it('renders "waiting thermometer" for containers without temperature', () => {
      const container = {
        id: 1, beer: 'Beer 1', temperature: null, minTemperature: 4, maxTemperature: 6, outOfRange: false
      };
      const wrapper = mount(<ContainerTemperature {...container}/>);
      expect(wrapper.text()).not.toContain('null');
      expect(wrapper.text()).toContain('waiting thermometer');
    });

    it('doesn\'t render "waiting thermometer" for containers with temperature', () => {
      const container = {
        id: 1, beer: 'Beer 1', temperature: 5, minTemperature: 4, maxTemperature: 6, outOfRange: false
      };
      const wrapper = mount(<ContainerTemperature {...container}/>);
      expect(wrapper.text()).not.toContain('waiting thermometer');
    });
  });

  describe('out of range', () => {
    it('adds outOfRange class for outOfRange containers', () => {
      const container = {
        id: 1, beer: 'Beer 1', temperature: 7, minTemperature: 4, maxTemperature: 6, outOfRange: true
      };
      const wrapper = shallow(<ContainerTemperature {...container}/>);
      expect(wrapper.props().className).toContain('outOfRange');
    });

    it('doesn\'t add outOfRange class for not outOfRange containers', () => {
      const container = {
        id: 1, beer: 'Beer 1', temperature: 7, minTemperature: 4, maxTemperature: 6, outOfRange: false
      };
      const wrapper = shallow(<ContainerTemperature {...container}/>);
      expect(wrapper.props().className).not.toContain('outOfRange');
    });
  });

  describe('toast', () => {
    beforeEach(toast.warn.mockClear);

    it('toasts out of range containers on update', () => {
      const container = {
        id: 1, beer: 'Beer 1', temperature: 7, minTemperature: 4, maxTemperature: 6, outOfRange: false
      };
      const wrapper = mount(<ContainerTemperature {...container}/>);

      wrapper.setProps({ outOfRange: true });

      expect(toast.warn).toHaveBeenCalledWith('Beer 1 on container 1 is out of temperature range!');
    });

    it('doesn\'t toasts not out of range containers on update', () => {
      const container = {
        id: 1, beer: 'Beer 1', temperature: 7, minTemperature: 4, maxTemperature: 6, outOfRange: true
      };
      const wrapper = mount(<ContainerTemperature {...container}/>);

      wrapper.setProps({ outOfRange: false });

      expect(toast.warn).not.toHaveBeenCalled();
    });

    it('doesn\'t toasts out of range containers on mount', () => {
      const container = {
        id: 1, beer: 'Beer 1', temperature: 7, minTemperature: 4, maxTemperature: 6, outOfRange: true
      };
      mount(<ContainerTemperature {...container}/>);
      expect(toast.warn).not.toHaveBeenCalled();
    });
  });
});

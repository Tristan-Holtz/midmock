import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header', () => {
  it('should render the component', () => {
    const wrapper = shallow(<Header />);

    expect(wrapper).toMatchSnapshot();
  });

  describe('handleChange', () => {
    it('should update name in state', () => {
      const wrapper = shallow(<Header />);
      const mockEvent = {
        target: {
          name: 'name',
          value: 'Tristan'
        }
      };

      wrapper.instance().handleChange(mockEvent);
      expect(wrapper.state('name')).toEqual('Tristan');
    });

    it('should update date in state', () => {
      const wrapper = shallow(<Header />);
      const mockEvent = {
        target: {
          name: 'date',
          value: '2/14'
        }
      };

      wrapper.instance().handleChange(mockEvent);
      expect(wrapper.state('date')).toEqual('2/14');
    });

    it('should update time in state', () => {
      const wrapper = shallow(<Header />);
      const mockEvent = {
        target: {
          name: 'time',
          value: '7:30'
        }
      };

      wrapper.instance().handleChange(mockEvent);
      expect(wrapper.state('time')).toEqual('7:30');
    });

    it('should update number in state', () => {
      const wrapper = shallow(<Header />);
      const mockEvent = {
        target: {
          name: 'number',
          value: '2'
        }
      };

      wrapper.instance().handleChange(mockEvent);
      expect(wrapper.state('number')).toEqual('2');
    });
  });

  describe('makeReservation', () => {
    it('should fire when button is clicked', () => {
      const wrapper = shallow(<Header />);
      wrapper.makeReservation = jest.fn();

      wrapper.find('button').simulate('click');
      expect(wrapper.makeReservation).toHaveBeenCalled();
    });
  });
});

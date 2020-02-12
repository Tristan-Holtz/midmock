import React from 'react';
import { shallow } from 'enzyme';
import Reservation from './Reservation';

describe('Reservation', () => {
  it('should render the component', () => {
    const wrapper = shallow(
      <Reservation
        reservationList={[
          {
            id: Date.now(),
            name: '',
            date: '',
            time: '',
            number: ''
          }
        ]}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
});

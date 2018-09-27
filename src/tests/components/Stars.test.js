/* 
global jest 
expect 
*/
import React from 'react';
import { shallow } from 'enzyme';

import Stars from '../../components/Stars';

describe('Stars Component', () => {
  const setup = () => {
    const props = {
      numberOfStars: 8
    };

    return shallow(<Stars {...props}/>);
  };
  const wrapper = setup();

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

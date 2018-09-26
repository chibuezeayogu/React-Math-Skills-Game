/* 
global jest 
expect 
*/
import React from 'react';
import { mount } from 'enzyme';
import Numbers from '../../components/Numbers';

describe('Numbers Component', () => {
  const setup = () => {
    const props = {
      selectedNumbers: [1, 2, 3, 4, 5, 6, 7, 8],
      selectNumber: jest.fn(),
      usedNumbers: [9]
    };

    return mount(<Numbers {...props}/>);
  };

  const wrapper = setup();

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });


  it('should selete a selectNumber', () => {
    wrapper.find('#selectNumber').first().simulate('click');
  });
});

/* 
global jest 
expect 
*/
import React from 'react';
import { mount } from 'enzyme';
import Answers from '../../components/Answers';

describe('Answers Component', () => {
  const setup = () => {
    const props = {
      selectedNumbers: [1],
      unselectNumber: jest.fn(),
    };

    return mount(<Answers {...props}/>);
  };
  const wrapper = setup();

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should unselete a number', () => {
    wrapper.find('span').first().simulate('click');
  });
});

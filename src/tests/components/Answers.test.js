/* 
global jest 
expect 
*/
import React from 'react';
import { shallow } from 'enzyme';

import Answers from '../../components/Answers';

describe('Answers Component', () => {
  const setup = () => {
    const props = {
      selectedNumbers: [1],
      unselectNumber: jest.fn(),
    };

    return shallow(<Answers {...props}/>);
  };
  const wrapper = setup();

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call handleUnselectNumber method', () => {
    const handleSpy = jest.spyOn(wrapper.instance(), 'handleUnselectNumber');
    wrapper.instance().handleUnselectNumber();
    expect(handleSpy).toHaveBeenCalled();
  });

  it('should unselete a number', () => {
    wrapper.find('span').first().simulate('click');
  });
});

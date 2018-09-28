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
    const spy = jest.spyOn(wrapper.instance(), 'handleUnselectNumber');
    const event = {
      target: {
        id: 1
      }
    };

    wrapper.instance().handleUnselectNumber(event);
    expect(spy).toHaveBeenCalled();
  });
});

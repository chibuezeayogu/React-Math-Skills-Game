/* 
global jest 
expect 
*/
import React from 'react';
import { shallow } from 'enzyme';
import Numbers from '../../components/Numbers';

describe('Numbers Component', () => {
  const setup = () => {
    const props = {
      selectedNumbers: [1, 2, 3, 4, 5, 6, 7, 8],
      selectNumber: jest.fn(),
      usedNumbers: [9]
    };

    return shallow(<Numbers {...props}/>);
  };

  const wrapper = setup();

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call numberClassName method', () => {
    const spy = jest.spyOn(wrapper.instance(), 'numberClassName');
    wrapper.instance().numberClassName(1);
    expect(spy).toHaveBeenCalled();
  });

  it('should call handleSelectNumber  method', () => {
    const spy = jest.spyOn(wrapper.instance(), 'handleSelectNumber');
    const event = {
      target: {
        id: 1
      }
    };

    wrapper.instance().handleSelectNumber(event);
    expect(spy).toHaveBeenCalled();
  });
});

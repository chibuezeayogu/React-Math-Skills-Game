/* 
global jest 
expect 
*/
import React from 'react';
import { shallow } from 'enzyme';

import DoneFrame from '../../components/DoneFrame';

describe('DoneFrame Component', () => {
  const setup = () => {
    const props = {
      doneStatus: "Nice Well Done",
      resetGame: jest.fn(),
    };

    return shallow(<DoneFrame {...props}/>);
  };
  const wrapper = setup();

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

/* 
global jest 
expect 
*/
import React from 'react';
import { shallow } from 'enzyme';

import DoneFrame from '../../components/DoneFrame';

describe('DoneFrame Component', () => {
  const setup = (status) => {
    const props = {
      doneStatus: status,
      resetGame: jest.fn(),
    };

    return shallow(<DoneFrame {...props}/>);
  };
  const wrapper = setup(true);

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

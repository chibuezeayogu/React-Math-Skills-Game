/* 
global jest 
expect 
*/
import React from 'react';
import { shallow } from 'enzyme';
import Modal from '../../components/Modal';

describe('Modal Component', () => {
  const wrapper = shallow(<Modal />);

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

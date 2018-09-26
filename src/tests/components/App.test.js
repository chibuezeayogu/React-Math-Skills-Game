/* 
global jest 
expect 
*/
import React from 'react';
import { mount } from 'enzyme';
import App from '../../components/App';

describe('App Component', () => {
  it('should render correctly', () => {
    const wrapper = mount(<App />);
    
    expect(wrapper).toMatchSnapshot();
  });
});

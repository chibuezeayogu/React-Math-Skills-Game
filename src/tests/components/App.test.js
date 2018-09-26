/* 
global jest 
expect 
*/
import React from 'react';
import { shallow } from 'enzyme';

import App from '../../components/App';

describe('App Component', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<App />);
    
    expect(wrapper).toMatchSnapshot();
  });
});

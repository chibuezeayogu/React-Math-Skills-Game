/* 
global jest 
expect 
*/
import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import ReactDOM from 'react-dom';
import Index from '../../index';

describe('Render Dom', () => {
  it('renders without crashing', () => {
    expect(
      toJson(
        Object.assign({}, Index, { _reactInternalInstance: 'censored' }),
      ),
    ).toMatchSnapshot();
  });
});

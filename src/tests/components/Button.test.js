/* 
global jest 
expect 
*/
import React from 'react';
import { shallow } from 'enzyme';

import Button from '../../components/Button';

describe('Button Component', () => {
  const setup = (status) => {
    const props = {
      answerIsCorrect: status,
      checkAnswer: jest.fn(),
      acceptAnswer: jest.fn(),
      selectedNumbers: [1],
      redraw: jest.fn(),
      redraws: 5
    };

    return shallow(<Button {...props}/>);
  };

  
  it('render correctly', () => {
    const wrapper = setup(null);
    expect(wrapper).toMatchSnapshot();
  });

  it('should call handelCheckAnswer when answerIsCorrect is ture', () => {
    const wrapper = setup(true);
    const handleSpy = jest.spyOn(wrapper.instance(), 'handelCheckAnswer');
    wrapper.instance().handelCheckAnswer();
    expect(handleSpy).toHaveBeenCalled();
  });

  it('should call handelCheckAnswer when answerIsCorrect is false', () => {
    const wrapper = setup(false);
    const handleSpy = jest.spyOn(wrapper.instance(), 'handelCheckAnswer');
    wrapper.instance().handelCheckAnswer();
    expect(handleSpy).toHaveBeenCalled();
  });

  it('should call handelAcceptAnswer method', () => {
    const wrapper = setup(true);
    const handleSpy = jest.spyOn(wrapper.instance(), 'handelAcceptAnswer');
    wrapper.instance().handelAcceptAnswer();
    expect(handleSpy).toHaveBeenCalled();
  });

  it('should call handelRedraw method', () => {
    const wrapper = setup(null);
    const handleSpy = jest.spyOn(wrapper.instance(), 'handelRedraw');
    wrapper.instance().handelRedraw();
    expect(handleSpy).toHaveBeenCalled();
  });

});

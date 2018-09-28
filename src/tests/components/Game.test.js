/* 
global jest 
expect 
*/
import React from 'react';
import { shallow } from 'enzyme';
import Game from '../../components/Game';

describe('Game Component', () => {
  const wrapper = shallow(<Game />);

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call resetGame method', () => {
    const resetGameSpy = jest.spyOn(wrapper.instance(), 'resetGame');
    wrapper.instance().resetGame();
    expect(resetGameSpy).toHaveBeenCalled();
  });
  it('should call selectNumber method', () => {
    const selectNumberSpy = jest.spyOn(wrapper.instance(), 'selectNumber');
    wrapper.instance().selectNumber(1);
    expect(selectNumberSpy).toHaveBeenCalled();
  });

  it('should call unselectNumber method', () => {
    const unselectNumberSpy = jest.spyOn(wrapper.instance(), 'unselectNumber');
    wrapper.instance().unselectNumber(1);
    expect(unselectNumberSpy).toHaveBeenCalled();
  });

  it('should call checkAnswer method', () => {
    const checkAnswerSpy = jest.spyOn(wrapper.instance(), 'checkAnswer');
    wrapper.instance().checkAnswer();
    expect(checkAnswerSpy).toHaveBeenCalled();
  });

  it('should call acceptAnswer method', () => {
    const acceptAnswerSpy = jest.spyOn(wrapper.instance(), 'acceptAnswer');
    wrapper.instance().acceptAnswer();
    expect(acceptAnswerSpy).toHaveBeenCalled();
  });

  it('should call redraw method', () => {
    const redrawSpy = jest.spyOn(wrapper.instance(), 'redraw');
    wrapper.instance().redraw();
    expect(redrawSpy).toHaveBeenCalled();
  });

  it('should call possibleSolutions method', () => {
    const spy = jest.spyOn(wrapper.instance(), 'possibleSolutions');
    wrapper.instance().possibleSolutions(
      { randomNumberOfStars: 2, usedNumbers: [2, 3] }
    );
    expect(spy).toHaveBeenCalled();
  });

  it('should call updateDoneStatus method', () => {
    const spy = jest.spyOn(wrapper.instance(), 'updateDoneStatus');
    wrapper.instance().updateDoneStatus();
    expect(spy).toHaveBeenCalled();
  });
});

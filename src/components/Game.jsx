import React, { Component, Fragment } from 'react';
import PropTypes, { bool } from 'prop-types';
import _ from 'lodash';

import Numbers from './Numbers';
import DoneFrame from './DoneFrame';
import Button from './Button';
import Answers from './Answers';
import Stars from './Stars';
import possibleCombinationSum from '../utils/possibleCombinationSum';


/**
 * 
 * @class Game
 * 
 * @extends Component
 */
class Game extends Component {
  static randomNumber = () => 1 + Math.floor(Math.random() * 9);
  
  static initialState = () => ({
    selectedNumbers: [],
    randomNumberOfStars: Game.randomNumber(),
    answerIsCorrect: null,
    usedNumbers: [],
    redraws: 5,
    doneStatus: null
  });
  
  constructor(props) {
    super(props);
    this.state = Game.initialState();
  }
  
  /**
   * 
   * @method resetGame
   * 
   * @memberof Game
   * 
   * @returns {void}
   */
  resetGame = () => this.setState(Game.initialState());
  
  /**
   * 
   * @method selectNumber
   * 
   * @memberof Game
   * 
   * @param {integer} clickedNumber
   * 
   * @returns {void}
   */
  selectNumber = (clickedNumber) => {
    if (this.state.selectedNumbers.indexOf(Number(clickedNumber)) >= 0) {
      return;
    }

    this.setState(preState => ({
      answerIsCorrect: null,
      selectedNumbers: preState.selectedNumbers.concat(Number(clickedNumber))
    }));
  };
  
  /**
   * 
   * @method unselectNumber
   * 
   * @memberof Game
   * 
   * @param {integer} clickedNumber
   * 
   * @returns {void}
   */
  unselectNumber = (clickedNumber) => {
    this.setState(preState => ({
      answerIsCorrect: null,
      selectedNumbers: preState.selectedNumbers.filter(
        number => number !== Number(clickedNumber)
      ) 
    }));
  };
  
  /**
   * 
   * @method checkAnswer
   * 
   * @memberof Game
   * 
   * @returns {void}
   */
  checkAnswer = () => {
    this.setState(prevState => ({
      answerIsCorrect: prevState.randomNumberOfStars === prevState.selectedNumbers.reduce((acc, n) => acc + n, 0)
    }));
  };
  
  /**
   * 
   * @method acceptAnswer
   * 
   * @memberof Game
   * 
   * @returns {void}
   */
  acceptAnswer = () => {
    this.setState(preState => ({
      usedNumbers: preState.usedNumbers.concat(preState.selectedNumbers),
      randomNumberOfStars: Game.randomNumber(),
      answerIsCorrect: null,
      selectedNumbers: []
    }), this.updateDoneStatus);
  };
  
  /**
   * 
   * @method redraw
   * 
   * @memberof Game
   * 
   * @returns {void}
   */
  redraw = () => {
    if (this.state.redraws === 0) { return; }
    this.setState(preState => ({
      randomNumberOfStars: Game.randomNumber(),
      answerIsCorrect: null,
      selectedNumbers: [],
      redraws: preState.redraws - 1
    }), this.updateDoneStatus);
  }; 

  /**
   * 
   * @method redraw
   * 
   * @memberof Game
   * 
   * @param {number} ramdomNumberOfStars
   * 
   * @param {array} sedNumbers
   * 
   * @returns {void}
   */
  possibleSolutions = ({ randomNumberOfStars, usedNumbers }) => {
    const possibleNumbers = _.range(1, 10).filter(
      number => usedNumbers.indexOf(number) === -1
    );
    
    return possibleCombinationSum(possibleNumbers, randomNumberOfStars);
  };
  
  /**
   * 
   * @method updateDoneStatus
   * 
   * @memberof Game
   * 
   * @returns {void}
   */
  updateDoneStatus = () => {
    this.setState(preState => {
      if (preState.usedNumbers.length === 9) {
        return { doneStatus: 'Done Nice!' };
      }
      if (preState.redraws === 0 && !this.possibleSolutions(preState)) {
        return { doneStatus: 'Game Over!' };
      }
    });
  };
  
  render() {
    const { 
      selectedNumbers,
      randomNumberOfStars,
      answerIsCorrect,
      usedNumbers,
      redraws,
      doneStatus
    } = this.state;
    const { progress } = this;
    return (
    <Fragment>
      <div className="jumbotron text-center">
        <h1>Math Skills Kids' Game</h1>
        <h2>Play Nine</h2>
      </div>
      <div className="container container-set">
        { doneStatus 
          ? <DoneFrame
              doneStatus={doneStatus}
              resetGame={this.resetGame}
            />
          : <div>
          <div className="row">
          <div className="card text-center justify-content-center col-sm-5">
            <Stars 
              numberOfStars={randomNumberOfStars} 
            />
          </div>
          <div className="text-center col-sm-2 col-md-2 col-lg-2 ">
            <Button
              selectedNumbers={selectedNumbers} 
              checkAnswer={this.checkAnswer}
              answerIsCorrect={answerIsCorrect}
              acceptAnswer={this.acceptAnswer}
              redraw={this.redraw}
              redraws={redraws}
            />
          </div>
          <div className="card text-center justify-content-center col-sm-5">
            <Answers 
              selectedNumbers={selectedNumbers} 
              unselectNumber={this.unselectNumber}
            />
          </div>
          </div>
          <br />
          <hr />
          <div className="card text-center justify-content-center col-sm-12" style={{ height: '100px' }}>
            <Numbers 
              selectedNumbers={selectedNumbers}
              selectNumber={this.selectNumber} 
              usedNumbers={usedNumbers}
            />
          </div>
          </div>
        }
        <br />
        <hr />
      </div>
    </Fragment>
    );
  }
}

export default Game;

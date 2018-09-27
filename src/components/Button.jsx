import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * 
 * @class Button
 * 
 * @extends Component
 */
class Button extends Component {
  /**
   * 
   * @method handelAnswerIsCorrect
   * 
   * @memberof Button
   * 
   * @returns {void}
   */
  handelAcceptAnswer = () => {
    this.props.acceptAnswer();
  }

  /**
   * 
   * @method handelCheckAnswer
   * 
   * @memberof Button
   * 
   * @returns {void}
   */
  handelCheckAnswer = () => {
    this.props.checkAnswer();
  }

  /**
   * 
   * @method handelAcceptAnswer
   * 
   * @memberof Button
   * 
   * @returns {void}
   */
  handelAcceptAnswer = () => {
    this.props.acceptAnswer();
  }

  /**
   * 
   * @method handelRedraw
   * 
   * @memberof Button
   * 
   * @returns {void}
   */
  handelRedraw = () => {
    this.props.redraw();
  }

  render() {
    const { selectedNumbers, redraws, answerIsCorrect } = this.props;
    let button;
    switch (answerIsCorrect) {
      case true:
        button = <button 
                  className="btn btn-outline-success" 
                  onClick={this.handelAcceptAnswer}>
                  <i className="fa fa-check"></i>
                </button>;
        break;
      case false:
        button = <button className="btn btn-outline-danger">
                  <i className="fa fa-times"></i>
                </button>;
        break;
      default:
        button = <button className="btn btn-outline-secondary"
                  onClick={this.handelCheckAnswer}
                  disabled={selectedNumbers.length === 0}>
                  =
                </button>;
    }
  
    return (
      <div className="col-2">
        {button}
        <br /><br />
        <button 
          className="btn btn-outline-warning"
          type="button"
          onClick={this.handelRedraw}
          disabled={redraws === 0}
        >
          <i className="fa fa-refresh"></i> {redraws}
        </button>
      </div>
    );
  }
}

Button.propTypes = {
  acceptAnswer: PropTypes.func,
  checkAnswer: PropTypes.func,
  redraw: PropTypes.func,
  redraws: PropTypes.number,
  selectedNumbers: PropTypes.array,
  answerIsCorrect: PropTypes.bool
};

export default Button;

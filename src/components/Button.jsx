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
   * @method handelAcceptAnswer
   * 
   * @memberof Button
   * 
   * @returns {void}
   */
  handleAcceptAnswer = () => {
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
  handleCheckAnswer = () => {
    this.props.checkAnswer();
  }

  /**
   * 
   * @method handelRedraw
   * 
   * @memberof Button
   * 
   * @returns {void}
   */
  handleRedraw = () => {
    this.props.redraw();
  }

  render() {
    const { selectedNumbers, redraws, answerIsCorrect } = this.props;
    let button;
    switch (answerIsCorrect) {
      case true:
        button = <button 
                  className="btn btn-outline-success" 
                  onClick={this.handleAcceptAnswer}>
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
                  onClick={this.handleCheckAnswer}
                  disabled={selectedNumbers.length === 0}>
                  =
                </button>;
    }
  
    return (
      <div>
        {button}
        <br /><br />
        <button 
          className="btn btn-outline-warning"
          type="button"
          onClick={this.handleRedraw}
          disabled={redraws === 0}
        >
          <i className="fas fa-redo-alt" aria-hidden="true"></i> {redraws}
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
  answerIsCorrect: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool
  ]),
};

export default Button;

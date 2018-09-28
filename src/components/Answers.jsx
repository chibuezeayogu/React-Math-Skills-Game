import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * 
 * @class Answers
 * @extends Component
 */
class Answers extends Component {
  /**
   * @method handleUnselectNumber
   * 
   * @memberof Answers
   * 
   * @param {object} event
   * 
   * @returns {void}
   */
  handleUnselectNumber = (event) => {
    this.props.unselectNumber(event.target.id);
  }

  render() {
    const { selectedNumbers } = this.props;
    return (
      <div>
        {selectedNumbers.map((number, i) => <span
            key={i}
            id={number}
            role="button"
            tabIndex={0}
            onClick={this.handleUnselectNumber}
          >
            {number}
          </span>
        )
        }
      </div>
    );
  }
}


Answers.propTypes = {
  selectedNumbers: PropTypes.array,
  unselectNumber: PropTypes.func
};

export default Answers;

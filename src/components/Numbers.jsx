import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';


/**
 * 
 * @class Numbers
 * @extends Component
 */
class Numbers extends Component {
  /**
   * 
   * @method selectNumber
   * 
   * @memberof Game
   * 
   * @param {integer} number
   * 
   * @returns {void}
   */
  numberClassName = (number) => {
    if (this.props.usedNumbers.indexOf(number) >= 0) return 'used';
    
    if (this.props.selectedNumbers.indexOf(number) >= 0) return 'selected';
  };

  /**
   * 
   * @method handleSelectNumber
   * 
   * @memberof Game
   * 
   * @param {object} event
   * 
   * @returns {void}
   */
  handleSelectNumber = (event) => {
    this.props.selectNumber(event.target.id);
  }

  render() {
    return (
      <div>
          {
            Numbers.list.map((number, i) => <span 
              key={i} 
              className={this.numberClassName(number)}
              id={number}
              role="button"
              tabIndex={0} 
              onClick={this.handleSelectNumber}
            >
              {number}
            </span>
            )
          }
      </div>
    );
  }
}

Numbers.list = _.range(1, 10);

Numbers.propTypes = {
  selectedNumbers: PropTypes.array,
  selectNumber: PropTypes.func,
  usedNumbers: PropTypes.array
};

export default Numbers;

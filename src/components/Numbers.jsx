import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

const Numbers = ({ selectedNumbers, selectNumber, usedNumbers }) => {
  const numberClassName = (number) => {
    if (usedNumbers.indexOf(number) >= 0) return 'used';
    
    if (selectedNumbers.indexOf(number) >= 0) return 'selected';
  };
  
  return (
    <div className="card text-center">
      <div>
        {
          Numbers.list.map((number, i) => <span 
            key={i} 
            className={numberClassName(number)}
            id="selectNumber"
            role="button"
            tabIndex={0} 
            onClick={selectNumber.bind(null, number)}
          >
            {number}
          </span>
          )
        }
      </div>
    </div>
  );
};

Numbers.list = _.range(1, 10);

Numbers.propTypes = {
  selectedNumbers: PropTypes.array,
  selectNumber: PropTypes.func,
  usedNumbers: PropTypes.array
};

export default Numbers;

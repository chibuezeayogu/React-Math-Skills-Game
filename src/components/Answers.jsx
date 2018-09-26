import React from 'react';
import PropTypes from 'prop-types';

const Answers = ({ selectedNumbers, unselectNumber }) => (
  <div className="col-5">
    {selectedNumbers.map((number, i) => <span 
        key={i}
        role="button"
        tabIndex={0}
        onClick={unselectNumber.bind(null, number)}
      >
        {number}
      </span>
    )
    }
  </div>
);

Answers.propTypes = {
  selectedNumbers: PropTypes.array,
  unselectNumber: PropTypes.func
};

export default Answers;

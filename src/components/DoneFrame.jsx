import React from 'react';
import PropTypes from 'prop-types';

const DoneFrame = ({ doneStatus, resetGame }) => (
  <div className="text-center">
    <h2>{doneStatus}</h2>
      <button className="btn btn-outline-secondary"
        onClick={resetGame}
      >
      Play Again
    </button>
  </div>
);

DoneFrame.propTypes = {
  doneStatus: PropTypes.bool,
  resetGame: PropTypes.func,
};

export default DoneFrame;

import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

const Stars = ({ numberOfStars }) => (
  <div className="col-5">
    {_.range(numberOfStars).map(i => <i key={i} className="fa fa-star" />)}
  </div>
);

Stars.propTypes = {
  numberOfStars: PropTypes.number,
};

export default Stars;

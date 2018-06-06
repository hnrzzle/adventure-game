import React from 'react';
import PropTypes from 'prop-types';

const directions = {
  e: 'East',
  w: 'West',
  n: 'North',
  s: 'South'
};

export default function Direction({ direction, onMove }) {
  return (
    <li key="direction">
      <button onClick={onMove}>
        {directions[direction]}
      </button>
    </li>
  );
}

Direction.propTypes = {
  direction: PropTypes.string.isRequired,
  onMove: PropTypes.func.isRequired
};
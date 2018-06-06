import React from 'react';
import PropTypes from 'prop-types';

Direction.propTypes = {
  direction: PropTypes.string.isRequired,
  onOpen: PropTypes.func.isRequired
};

const directions = {
  e: 'East',
  w: 'West',
  n: 'North',
  s: 'South'
};

export default function Direction({ direction, onOpen }) {
  return (
    <li key="direction">
      <button onClick={onOpen}>
        {directions[direction]}
      </button>
    </li>
  );
}
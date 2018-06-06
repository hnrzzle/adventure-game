import React from 'react';
import PropTypes from 'prop-types';
// import styles from './Item.css';

Item.propTypes = {
  items: PropTypes.array,
  onUse: PropTypes.func.isRequired
};

export default function Item({ items, onUse }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.key}>
          <button onClick={() => onUse(item)}>{item.description}</button>
        </li>
      ))}
    </ul>  
  );
}

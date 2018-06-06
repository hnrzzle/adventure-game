import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './Room.css';



export default class Room extends Component {


  static propTypes = {
    room: PropTypes.object,
    // onMove: propTypes.func.isRequired,
    // onPickup: propTypes.func.isRequired,
  };

  render() {
    const { room } = this.props;
    const { title, description, image, directions, items } = room;


    return (
      <section className={styles.room} style={{ backgroundImage: `url(${image})` }}>
        <h3>{title}</h3>
        <p>{description}</p>

        <h4>Directions</h4>
        <ul className="directions">
        </ul>

      </section>
    );
  }

}
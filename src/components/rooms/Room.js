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
    const { title, description, image, doors, items } = room;


    return (
      <section className={styles.room} style={{ backgroundImage: `url(${image})` }}>
        <h3>{title}</h3>
        <p>{description}</p>

        <h4>Doors</h4>
        <ul className="doors">
        </ul>

      </section>
    );
  }

}
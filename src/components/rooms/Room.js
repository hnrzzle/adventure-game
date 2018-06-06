import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Direction from '../direction/Direction';
import Item from '../game/Item';

import styles from './Room.css';

export default class Room extends Component {


  static propTypes = {
    room: PropTypes.object,
    onInteract: PropTypes.func.isRequired
    // onMove: propTypes.func.isRequired,
    // onPickup: propTypes.func.isRequired,
  };

  render() {
    const { room, onInteract } = this.props;
    const { title, description, image, directions, items } = room;


    return (
      <section className={styles.room} style={{ backgroundImage: `url(${image})` }}>
        <h3>{title}</h3>
        {!!items.length && <p>{description[0]}</p>}
        {!items.length && <p>{description[1]}</p>}
        {!!items.length && (
          <div>
            <h4>Items</h4>
            <Item items={items} onUse={onInteract}/>
          </div>
        )}

        <h4>Directions</h4>
        <ul className="directions">
        </ul>

      </section>
    );
  }

}
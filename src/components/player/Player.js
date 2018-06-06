import React, { Component } from 'react';
import PropTypes from 'prop-types';
import full from'../images/fullheart.png';
import half from'../images/halfheart.png';
import empty from'../images/emptyheart.png';
import styles from './Player.css';

const hearts = {
    full,
    half,
    empty
}
export default class Player extends Component {

  static = {
    propTypes: {
      player: PropTypes.object.isRequired,
      onNameChange: PropTypes.func.isRequired
    }
  };

  state = {
    editing: false
  };

  handleEdit = () => {
    this.setState(prev => ({ editing: !prev.editing }));
  };

  renderHearts = (energy) => {
      const full = Math.floor(energy / 10);
      const half = ((energy % 10) >= 5) ? 1 : 0;
      const empty = 5 - full - half;

      let health = [];
      function countHearts(count, image, key) {
        for (let i=1; i <= count; i++){
          health.push(<img key={key + i} src={image}/>);
        }
      };

      countHearts(full, hearts.full, 'full');
      countHearts(half, hearts.half, 'half');
      countHearts(empty, hearts.empty, 'empty');
      
      return health;
  }

  render() {
    const { editing } = this.state;
    const { player, onNameChange } = this.props;
    const { name, energy } = player;

    const hearts = this.renderHearts(energy);

    return (
      <div id="player" className={styles.player}>
        {editing ? 
          <input value={name} onChange={({ target }) => onNameChange(target.value)}/> :
          <span>{name}</span>
        }
        &nbsp;
        <button onClick={this.handleEdit}>{editing ? 'X' : '✎'}</button>
        <div id="hearts">{hearts}</div>
      </div>
    ); 
  }
}
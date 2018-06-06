import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

  render() {
    const { editing } = this.state;
    const { player, onNameChange } = this.props;
    const { name, energy } = player;

    return (
      <div className={styles.player}>
        {editing ? 
          <input value={name} onChange={({ target }) => onNameChange(target.value)}/> :
          <span>{name}</span>
        }
        &nbsp;
        <button onClick={this.handleEdit}>{editing ? 'X' : '✎'}</button>
        
      </div>
    ); 
  }
}
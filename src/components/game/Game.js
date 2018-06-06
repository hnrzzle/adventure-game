import React, { Component } from 'react';
import Rooms, { start as currentRoom } from '../rooms/Rooms';
import Player from '../player/Player';
import Room from '../rooms/Room';
// import Player from './Player';

export default class Game extends Component {

  state = {
    player: {
      name: 'Player 1',
      energy: 45
    },
    Rooms,
    currentRoom: currentRoom
  };

  // handleMove = key => {

  // }

  // handleUse = item => {


  // }

  handleNameChange = name => {
    this.setState(({ player }) => {
      player.name = name;
      return { player };
    });
  };


  render() {
    const { currentRoom, player, action } = this.state;

    return (
      <section>
        <Player player={player}
          onUse={this.handleUse}
          onNameChange={this.handleNameChange}/>

        <Room room={currentRoom}
          action={action}
          onMove={this.handleMove}
          onInteract={this.handleInteract}/>
        
      </section>
    );
  }
}
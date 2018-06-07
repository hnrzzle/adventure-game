import React, { Component } from 'react';
import { rooms, start } from '../rooms/rooms';
import Player from '../player/Player';
import Room from '../rooms/Room';


export default class Game extends Component {

  state = {
    action: '',
    player: {
      name: 'Player 1',
      energy: 45
    },
    rooms,
    currentRoom: start
  };

  handleMove = roomKey => {
    this.setState(prevState => ({ 
      currentRoom: prevState.rooms[roomKey],
      action: '',
      player: {
        ...prevState.player,
        energy: prevState.rooms[roomKey].type === 'hill' ? prevState.player.energy - 5 : prevState.player.energy - 2,
      }
    }));
  };

  handleInteract = item => {
    this.setState(({ player, currentRoom }) => {
      const index = currentRoom.items.indexOf(item);
      if(index === -1) return;
      currentRoom.items.splice(index, 1);

      const { energy, action } = currentRoom.use(player.energy);
      player.energy = energy; 

      return { player, action };
    });

  };

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
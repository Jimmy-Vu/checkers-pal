import React from 'react';
import Board from './board';
import ColorModal from './color-modal';
import ColorContext from '../contexts/color-context';
import { io } from 'socket.io-client';

const socket = io();

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colorHasBeenChosen: false,
      p1SocketId: null,
      p2SocketId: null,
      p1Color: null,
      p2Color: null,
      isCurrentTurn: false
    };

    socket.on('color-chosen', ({ color1, color2, p1SocketId }) => {
      this.setState({
        colorHasBeenChosen: true,
        p1Color: color1,
        p2Color: color2,
        p1SocketId: p1SocketId
      });
    });
    socket.on('color-chosen2', ({ p2SocketId }) => {
      this.setState({
        p2SocketId: p2SocketId
      });
    });
  }

  render() {
    let colorMessage = '';
    let colorModal = '';
    if (this.state.p1Color !== null) {
      colorMessage = <h3>You are {this.state.p1Color}!</h3>;
      colorModal = <> </>;
    } else {
      colorMessage = <h3 className="hidden">You are {this.state.p1Color}!</h3>;
      colorModal = <ColorModal socket={socket} colorHasBeenChosen={this.colorHasBeenChosen}></ColorModal>;
    }
    return (
      <div className="display-flex flex-column align-center">
        <ColorContext.Provider value={{
          state: this.state,
          selectColor: (value1, value2) => this.setState({
            p1Color: value1,
            p2Color: value2
          })
        }}>
          <Board />
          {colorMessage}
          {colorModal}
        </ColorContext.Provider>
      </div>
    );
  }
}

export default Game;

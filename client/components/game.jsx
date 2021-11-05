import React from 'react';
import Board from './board';
class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      noMovesRed: false,
      noMovesWhite: false,
      playerOrientation: 'red'
    };
  }

  render() {
    return <Board></Board>;
  }
}

export default Game;

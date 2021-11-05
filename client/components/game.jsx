import React from 'react';
import Board from './board';
import ColorModal from './color-modal';
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
    return (
      <div className="display-flex flex-column align-center">
        <Board></Board>
        <ColorModal></ColorModal>
      </div>
    );

  }
}

export default Game;

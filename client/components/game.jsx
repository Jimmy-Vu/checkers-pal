import React from 'react';
import Board from './board';
import ColorModal from './color-modal';
import ColorContext from '../contexts/color-context';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      p1Color: null,
      p2Color: null
    };
  }

  render() {
    let colorMessage = '';
    let colorModal = '';
    if (this.state.p1Color !== null) {
      colorMessage = <h3>You are {this.state.p1Color}!</h3>;
      colorModal = <> </>;
    } else {
      colorMessage = <h3 className="hidden">You are {this.state.p1Color}!</h3>;
      colorModal = <ColorModal></ColorModal>;
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

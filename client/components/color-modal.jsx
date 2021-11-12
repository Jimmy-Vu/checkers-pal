import React from 'react';
import ColorContext from '../contexts/color-context';

class ColorModal extends React.Component {
  render() {

    const socket = this.props.socket;
    return (
    <div id="colorModal" className="color-modal">
      <h3>Pick A Color</h3>
          <div className="selection-holder display-flex justify-around">
          <div id="white" style={{ width: '50px', height: '50px' }} onClick={() => {
            this.context.selectColor('white', 'red');
            socket.emit('color-choice', ({
              color1: 'white',
              color2: 'red',
              colorHasBeenChosen: this.props.colorHasBeenChosen
            }));
          }} className="piece-white"></div>
          <div id="red" style={{ width: '50px', height: '50px' }} onClick={() => {
            this.context.selectColor('red', 'white');
            socket.emit('color-choice', ({
              color1: 'red',
              color2: 'white',
              colorHasBeenChosen: this.props.colorHasBeenChosen
            }));
          }} className="piece-red"></div>
          </div>

    </div>);
  }
}

ColorModal.contextType = ColorContext;
export default ColorModal;

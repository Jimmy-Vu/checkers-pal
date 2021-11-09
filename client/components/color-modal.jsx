import React from 'react';
import ColorContext from '../contexts/color-context';

class ColorModal extends React.Component {
  render() {
    return (
    <div id="colorModal" className="color-modal">
      <h3>Pick A Color</h3>
          <div className="selection-holder display-flex justify-around">
          <div id="white" style={{ width: '50px', height: '50px' }} onClick={() => { this.context.selectColor('white', 'red'); }} className="piece-white"></div>
          <div id="red" style={{ width: '50px', height: '50px' }} onClick={() => { this.context.selectColor('red', 'white'); }} className="piece-red"></div>
          </div>

    </div>);
  }
}

ColorModal.contextType = ColorContext;
export default ColorModal;

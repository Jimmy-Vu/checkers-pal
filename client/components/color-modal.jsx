import React from 'react';

class ColorModal extends React.Component {
  constructor(props) {
    super(props);

    this.clickHandler = this.clickHandler.bind(this);
  }

  render() {
    return (
    <div id="colorModal" className="color-modal">
      <h3>Pick A Color</h3>
      <div className="selection-holder display-flex justify-around">
          <div style={{ width: '50px', height: '50px' }} onClick={this.clickHandler} className="piece-white"></div>
          <div style={{ width: '50px', height: '50px' }} onClick={this.clickHandler} className="piece-red"></div>
      </div>
    </div>);
  }

  clickHandler() {
    console.log('hi');
  }
}

export default ColorModal;

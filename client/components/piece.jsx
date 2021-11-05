import React from 'react';

class PieceWhite extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isKing: false,
      x: 2,
      y: 1
    };

  }

  render() {
    return <div className="piece-white"></div>;
  }
}

class PieceRed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isKing: false,
      x: null,
      y: null
    };
  }

  render() {
    return <span className="piece-red"></span>;
  }
}

export { PieceWhite, PieceRed };

import React from 'react';
class SquareCream extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pieceIsOn: false
    };
  }

  render() {
    return <div className="square cream"></div>;
  }
}

class SquareBlack extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pieceIsOn: false
    };
  }

  render() {
    return <div className="square black"></div>;
  }
}

export { SquareCream, SquareBlack };

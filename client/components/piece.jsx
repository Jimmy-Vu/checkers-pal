import React from 'react';

class PieceWhite extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isKing: false,
      position: props.startId
    };
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return <div className="piece-white" onClick={this.handleClick}></div>;
  }

  handleClick(event) {
    this.setState({ position: event.target.closest('.square').id });
  }
}

class PieceRed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isKing: false,
      position: props.startId
    };
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return <span className="piece-red" onClick={this.handleClick}></span>;
  }

  handleClick(event) {
    this.setState({ position: event.target.closest('.square').id });
  }
}

export { PieceWhite, PieceRed };

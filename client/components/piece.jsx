import React from 'react';
import findAvailableSquares from './availableSquares';
import legalSquaresCheck from './legalSquaresCheck';

class PieceWhite extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isKing: false,
      position: props.startId,
      isSelected: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return (this.state.isSelected
      ? <div className="piece-white selected" onClick={this.handleClick}></div>
      : <div className="piece-white" onClick={this.handleClick}></div>
    );
  }

  handleClick(event) {
    const positionsRed = this.props.positionsRed;
    const positionsWhite = this.props.positionsWhite;
    const highlightLegalSquares = this.props.highlightLegalSquares;

    const currentPosition = event.target.closest('.square').id;
    this.setState({
      isSelected: true
    });
    let availableSquares = findAvailableSquares(currentPosition, 'white');
    availableSquares = legalSquaresCheck(availableSquares, positionsRed, positionsWhite);
    highlightLegalSquares(availableSquares);
  }
}

class PieceRed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isKing: false,
      position: props.startId,
      isSelected: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return (this.state.isSelected
      ? <div className="piece-red selected" onClick={this.handleClick}></div>
      : <div className="piece-red" onClick={this.handleClick}></div>
    );
  }

  handleClick(event) {
    const positionsRed = this.props.positionsRed;
    const positionsWhite = this.props.positionsWhite;
    const highlightLegalSquares = this.props.highlightLegalSquares;

    const currentPosition = event.target.closest('.square').id;
    this.setState({
      isSelected: true
    });
    let availableSquares = findAvailableSquares(currentPosition, 'red');
    availableSquares = legalSquaresCheck(availableSquares, positionsRed, positionsWhite);
    highlightLegalSquares(availableSquares);
  }
}

export { PieceWhite, PieceRed };

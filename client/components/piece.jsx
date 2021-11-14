import React from 'react';

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
    this.setState({
      position: event.target.closest('.square').id,
      isSelected: true
    });
    console.log(this.props.positionsWhite);
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
    this.setState({
      position: event.target.closest('.square').id,
      isSelected: true
    });
    console.log(this.props.positionsRed);
  }
}

export { PieceWhite, PieceRed };

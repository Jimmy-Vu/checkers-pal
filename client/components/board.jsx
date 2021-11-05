import React from 'react';
import { PieceWhite, PieceRed } from './piece';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: []
    };
  }

  render() {
    const yAxis = [1, 2, 3, 4, 5, 6, 7, 8];
    const xAxis = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    const startingPositionsRed = ['H1', 'H3', 'H5', 'H7', 'G2', 'G4', 'G6', 'G8', 'F1', 'F3', 'F5', 'F7'];
    const startingPositionsWhite = ['A2', 'A4', 'A6', 'A8', 'B1', 'B3', 'B5', 'B7', 'C2', 'C4', 'C6', 'C8'];

    let counter = 1;
    for (let j = 0; j < xAxis.length; j++) {
      for (let i = 0; i < yAxis.length; i++) {
        if (j % 2 === 0) {
          if ((startingPositionsRed.includes(`${xAxis[j]}${yAxis[i]}`))) {
            this.state.board.push(<span id={`${xAxis[j]}${yAxis[i]}`} key={`${xAxis[j]}${yAxis[i]}`} className="square black display-flex align-center justify-center"><PieceRed></PieceRed></span>);
            counter++;
          } else if ((startingPositionsWhite.includes(`${xAxis[j]}${yAxis[i]}`))) {
            this.state.board.push(<span id={`${xAxis[j]}${yAxis[i]}`} key={`${xAxis[j]}${yAxis[i]}`} className="square black display-flex align-center justify-center"><PieceWhite></PieceWhite></span>);
            counter++;
          } else if (counter % 2 === 0) {
            this.state.board.push(<span id={`${xAxis[j]}${yAxis[i]}`} key={`${xAxis[j]}${yAxis[i]}`} className="square black display-flex align-center justify-center">{xAxis[j]}{yAxis[i]}</span>);
            counter++;
          } else {
            this.state.board.push(<span id={`${xAxis[j]}${yAxis[i]}`} key={`${xAxis[j]}${yAxis[i]}`} className="square cream display-flex align-center justify-center">{xAxis[j]}{yAxis[i]}</span>);
            counter++;
          }
        } else {
          if ((startingPositionsRed.includes(`${xAxis[j]}${yAxis[i]}`))) {
            this.state.board.push(<span id={`${xAxis[j]}${yAxis[i]}`} key={`${xAxis[j]}${yAxis[i]}`} className="square black display-flex align-center justify-center"><PieceRed></PieceRed></span>);
            counter++;
          } else if ((startingPositionsWhite.includes(`${xAxis[j]}${yAxis[i]}`))) {
            this.state.board.push(<span id={`${xAxis[j]}${yAxis[i]}`} key={`${xAxis[j]}${yAxis[i]}`} className="square black display-flex align-center justify-center"><PieceWhite></PieceWhite></span>);
            counter++;
          } else if (counter % 2 !== 0) {
            this.state.board.push(<span id={`${xAxis[j]}${yAxis[i]}`} key={`${xAxis[j]}${yAxis[i]}`} className="square black display-flex align-center justify-center">{xAxis[j]}{yAxis[i]}</span>);
            counter++;
          } else {
            this.state.board.push(<span id={`${xAxis[j]}${yAxis[i]}`} key={`${xAxis[j]}${yAxis[i]}`} className="square cream display-flex align-center justify-center">{xAxis[j]}{yAxis[i]}</span>);
            counter++;
          }
        }
      }
    }

    return <div className="board">{this.state.board}</div>;
  }
}

export default Board;

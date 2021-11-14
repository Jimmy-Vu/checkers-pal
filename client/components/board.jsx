import React from 'react';
import { PieceWhite, PieceRed } from './piece';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [],
      positionsRed: ['H1', 'H3', 'H5', 'H7', 'G2', 'G4', 'G6', 'G8', 'F1', 'F3', 'F5', 'F7'],
      positionsWhite: ['A2', 'A4', 'A6', 'A8', 'B1', 'B3', 'B5', 'B7', 'C2', 'C4', 'C6', 'C8'],
      blackSquares: ['A2', 'A4', 'A6', 'A8', 'B1', 'B3', 'B5', 'B7',
        'C2', 'C4', 'C6', 'C8', 'D1', 'D3', 'D5', 'D7', 'E2', 'E4', 'E6', 'E8',
        'H1', 'H3', 'H5', 'H7', 'G2', 'G4', 'G6', 'G8', 'F1', 'F3', 'F5', 'F7'],
      whiteSquares: ['A1', 'A3', 'A5', 'A7', 'B2', 'B4', 'B6', 'B8', 'C1', 'C3',
        'C5', 'C7', 'D2', 'D4', 'D6', 'D8', 'E1', 'E3', 'E5', 'E7', 'F2', 'F4',
        'F6', 'F8', 'G1', 'G3', 'G5', 'G7', 'H2', 'H4', 'H6', 'H8']
    };
  }

  render() {
    if (this.state.board.length !== 0) {
      return <div className="board">{this.state.board}</div>;
    }
    const positionsRed = this.state.positionsRed;
    const positionsWhite = this.state.positionsWhite;
    const yAxis = [1, 2, 3, 4, 5, 6, 7, 8];
    const xAxis = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    let counter = 1;
    for (let j = 0; j < xAxis.length; j++) {
      for (let i = 0; i < yAxis.length; i++) {
        if (j % 2 === 0) {
          if ((this.state.positionsRed.includes(`${xAxis[j]}${yAxis[i]}`)) && this.state.blackSquares.includes((`${xAxis[j]}${yAxis[i]}`))) {
            this.state.board.push(<span id={`${xAxis[j]}${yAxis[i]}`} key={`${xAxis[j]}${yAxis[i]}`} className="square black display-flex align-center justify-center"><PieceRed positionsRed={positionsRed} startId={`${xAxis[j]}${yAxis[i]}`}></PieceRed></span>);
            counter++;
          } else if ((this.state.positionsRed.includes(`${xAxis[j]}${yAxis[i]}`)) && this.state.whiteSquares.includes((`${xAxis[j]}${yAxis[i]}`))) {
            this.state.board.push(<span id={`${xAxis[j]}${yAxis[i]}`} key={`${xAxis[j]}${yAxis[i]}`} className="square cream display-flex align-center justify-center"><PieceRed positionsRed={positionsRed} startId={`${xAxis[j]}${yAxis[i]}`}></PieceRed></span>);
            counter++;
          } else if ((this.state.positionsWhite.includes(`${xAxis[j]}${yAxis[i]}`)) && this.state.blackSquares.includes((`${xAxis[j]}${yAxis[i]}`))) {
            this.state.board.push(<span id={`${xAxis[j]}${yAxis[i]}`} key={`${xAxis[j]}${yAxis[i]}`} className="square black display-flex align-center justify-center"><PieceWhite positionsWhite={positionsWhite} startId={`${xAxis[j]}${yAxis[i]}`}></PieceWhite></span>);
            counter++;
          } else if ((this.state.positionsWhite.includes(`${xAxis[j]}${yAxis[i]}`)) && this.state.whiteSquares.includes((`${xAxis[j]}${yAxis[i]}`))) {
            this.state.board.push(<span id={`${xAxis[j]}${yAxis[i]}`} key={`${xAxis[j]}${yAxis[i]}`} className="square cream display-flex align-center justify-center"><PieceWhite positionsWhite={positionsWhite} startId={`${xAxis[j]}${yAxis[i]}`}></PieceWhite></span>);
            counter++;
          } else if (counter % 2 === 0) {
            this.state.board.push(<span id={`${xAxis[j]}${yAxis[i]}`} key={`${xAxis[j]}${yAxis[i]}`} className="square black display-flex align-center justify-center">{xAxis[j]}{yAxis[i]}</span>);
            counter++;
          } else {
            this.state.board.push(<span id={`${xAxis[j]}${yAxis[i]}`} key={`${xAxis[j]}${yAxis[i]}`} className="square cream display-flex align-center justify-center">{xAxis[j]}{yAxis[i]}</span>);
            counter++;
          }
        } else {
          if ((this.state.positionsRed.includes(`${xAxis[j]}${yAxis[i]}`)) && this.state.blackSquares.includes((`${xAxis[j]}${yAxis[i]}`))) {
            this.state.board.push(<span id={`${xAxis[j]}${yAxis[i]}`} key={`${xAxis[j]}${yAxis[i]}`} className="square black display-flex align-center justify-center"><PieceRed positionsRed={positionsRed} startId={`${xAxis[j]}${yAxis[i]}`}></PieceRed></span>);
            counter++;
          } else if ((this.state.positionsRed.includes(`${xAxis[j]}${yAxis[i]}`)) && this.state.whiteSquares.includes((`${xAxis[j]}${yAxis[i]}`))) {
            this.state.board.push(<span id={`${xAxis[j]}${yAxis[i]}`} key={`${xAxis[j]}${yAxis[i]}`} className="square cream display-flex align-center justify-center"><PieceRed positionsRed={positionsRed} startId={`${xAxis[j]}${yAxis[i]}`}></PieceRed></span>);
            counter++;
          } else if ((this.state.positionsWhite.includes(`${xAxis[j]}${yAxis[i]}`)) && this.state.blackSquares.includes((`${xAxis[j]}${yAxis[i]}`))) {
            this.state.board.push(<span id={`${xAxis[j]}${yAxis[i]}`} key={`${xAxis[j]}${yAxis[i]}`} className="square black display-flex align-center justify-center"><PieceWhite positionsWhite={positionsWhite} startId={`${xAxis[j]}${yAxis[i]}`}></PieceWhite></span>);
            counter++;
          } else if ((this.state.positionsWhite.includes(`${xAxis[j]}${yAxis[i]}`)) && this.state.whiteSquares.includes((`${xAxis[j]}${yAxis[i]}`))) {
            this.state.board.push(<span id={`${xAxis[j]}${yAxis[i]}`} key={`${xAxis[j]}${yAxis[i]}`} className="square cream display-flex align-center justify-center"><PieceWhite positionsWhite={positionsWhite} startId={`${xAxis[j]}${yAxis[i]}`}></PieceWhite></span>);
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
    counter = 0;

    return <div className="board">{this.state.board}</div>;
  }
}

export default Board;

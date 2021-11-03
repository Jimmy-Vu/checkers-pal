import React from 'react';
import { Row1, Row2 } from './row';

class Board extends React.Component {

  render() {
    return (
      <div className="board display-flex flex-column align-center">
        <Row1></Row1>
        <Row2></Row2>
        <Row1></Row1>
        <Row2></Row2>
        <Row1></Row1>
        <Row2></Row2>
        <Row1></Row1>
        <Row2></Row2>
      </div>
    );
  }
}

export default Board;

import React from 'react';
import Navbar from '../components/navbar';
import Game from '../components/game';

export default function Home(props) {
  return (
    <div>
      <Navbar></Navbar>
      <div className="display-flex justify-center">
        <Game></Game>
      </div>
    </div>
  );
}

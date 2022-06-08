function legalSquaresCheck(availableSquares, positionsRed, positionsWhite) {
  for (let i = 0; i < availableSquares.length; i++) {
    for (let j = 0; j < positionsRed.length; j++) {
      if (availableSquares[i] === positionsRed[j]) {
        availableSquares.splice(i, 1);
      }
    }
  }
  for (let i = 0; i < availableSquares.length; i++) {
    for (let j = 0; j < positionsWhite.length; j++) {
      if (availableSquares[i] === positionsWhite[j]) {
        availableSquares.splice(i, 1);
      }
    }
  }
  return availableSquares;
}

export default legalSquaresCheck;

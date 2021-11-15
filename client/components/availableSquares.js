function findAvailableSquares(currentPosition, color) {
  // const yAxis = [1, 2, 3, 4, 5, 6, 7, 8];
  const xAxis = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  const currentXAxis = currentPosition[0];
  const currentYAxis = Number.parseInt(currentPosition[1]);
  const availableSquares = [];
  let newXAxis = '';

  console.log('Current position:', currentPosition);

  if (color === 'red') {
    for (let i = 0; i < xAxis.length; i++) {
      if (xAxis[i] === currentXAxis) {
        newXAxis = xAxis[i - 1];
        console.log('New xAxis:', newXAxis);
      }
    }
    if ((currentYAxis - 1) !== 0) {
      availableSquares.push(newXAxis.concat(currentYAxis - 1));
    }
    if ((currentYAxis + 1) !== 9) {
      availableSquares.push(newXAxis.concat(currentYAxis + 1));
    }
    return availableSquares;
  }

  if (color === 'white') {
    for (let i = 0; i < xAxis.length; i++) {
      if (xAxis[i] === currentXAxis) {
        newXAxis = xAxis[i + 1];
        console.log('New xAxis:', newXAxis);
      }
    }
    if ((currentYAxis - 1) !== 0) {
      availableSquares.push(newXAxis.concat(currentYAxis - 1));
    }
    if ((currentYAxis + 1) !== 9) {
      availableSquares.push(newXAxis.concat(currentYAxis + 1));
    }
    return availableSquares;
  }
}

export default findAvailableSquares;

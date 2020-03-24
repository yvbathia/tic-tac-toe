const winnerCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

export const isUserWin = (currentTurn, newGameState) => {
  for (let i = 0; i < winnerCombinations.length; i++) {
    if (
      newGameState[winnerCombinations[i][0]] === currentTurn &&
      newGameState[winnerCombinations[i][1]] === currentTurn &&
      newGameState[winnerCombinations[i][2]] === currentTurn
    ) {
      return true;
    }
  }
  return false;
};

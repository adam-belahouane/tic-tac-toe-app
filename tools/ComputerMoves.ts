export default function computerMoves(grid: Array<string>, turn: string) {
  const array = [...grid];

  const opponent = turn === "x" ? "o" : "x";
  const z = [turn, opponent];

  const winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // Rows
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // Columns
    [0, 4, 8],
    [2, 4, 6], // Diagonals
  ];

  // Check for winning move
  for (const pattern of winningPatterns) {
    const [a, b, c] = pattern;
    if (array[a] === turn && array[b] === turn && array[c] === "") {
      array[c] = turn;
      return array;
    }
    if (array[a] === turn && array[c] === turn && array[b] === "") {
      array[b] = turn;
      return array;
    }
    if (array[b] === turn && array[c] === turn && array[a] === "") {
      array[a] = turn;
      return array;
    }
  }

  // Check for blocking opponent's winning move
  for (const pattern of winningPatterns) {
    const [a, b, c] = pattern;
    if (array[a] === opponent && array[b] === opponent && array[c] === "") {
      array[c] = turn;
      return array;
    }
    if (array[a] === opponent && array[c] === opponent && array[b] === "") {
      array[b] = turn;
      return array;
    }
    if (array[b] === opponent && array[c] === opponent && array[a] === "") {
      array[a] = turn;
      return array;
    }
  }

  
  // Best move middle square
  if (array[4] === "") {
    array[4] = turn;
    return array;
  }
  // If no winning or blocking move, choose an available spot
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "") {
      array[i] = turn;
      break;
    }
  }

  return array;
}

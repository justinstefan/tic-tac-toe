import { createSlice } from "@reduxjs/toolkit";

function calculateWinner(squares) {
  const winDirections = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < winDirections.length; i++) {
    const [a, b, c] = winDirections[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export const gameSlice = createSlice({
  name: "game",
  initialState: {
    squares: Array(9).fill(null),
    player1: "",
    player2: "",
    nextPlayer: null,
    xIsNext: true,
    winner: null,
  },
  reducers: {
    markAction: (state, action) => {
      const { position } = action.payload;
      state.squares[position] = state.xIsNext ? "X" : "O";
      state.winner = calculateWinner(state.squares);
      if (!state.winner) {
        state.xIsNext = !state.xIsNext;
        state.nextPlayer = state.nextPlayer === state.player1 ? state.player2 : state.player1;
        
        if (state.squares.indexOf(null) < 0) {
          state.winner = 'tie'
        }
      } 
    },
    start: (state, action) => {
      const { player1, player2 } = action.payload;
      state.player1 = player1;
      state.player2 = player2;
      state.nextPlayer = Math.round(Math.random()) > 0 ? player2 : player1;
      state.squares = Array(9).fill(null);
      state.xIsNext = true;
      state.winner = null;
    },
    newGame: (state) => {
      state.player1 = ''
      state.player2 = ''
      state.squares = Array(9).fill(null)
      state.xIsNext = true
      state.winner = null
    },
    restartGame: (state) => {
      state.nextPlayer = Math.round(Math.random()) > 0 ? state.player2 : state.player1;
      state.squares = Array(9).fill(null);
      state.xIsNext = true;
      state.winner = null;
    },
  },
});

export const { markAction, start, newGame, restartGame } = gameSlice.actions;

// selectors
export const selectSquares = (state) => state.game.squares;
export const selectNextPlayer = (state) => state.game.nextPlayer;
export const selectXIsNext = (state) => state.game.xIsNext;
export const selectWinner = (state) => state.game.winner;

export default gameSlice.reducer;

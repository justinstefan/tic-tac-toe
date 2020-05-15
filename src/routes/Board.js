import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectSquares,
  selectXIsNext,
  selectWinner,
  selectNextPlayer,
  markAction,
  newGame,
  restartGame,
} from "../app/gameSlice";
import { withRouter } from "react-router-dom";
import { Button } from "../common/Layout";
import styled from "styled-components";

import "./Game.css";

export const StyledBox = styled.button`
  border: 6px solid #2c3e50;
  border-radius: 2px;
  font-family: Helvetica;
  font-weight: bold;
  font-size: 4em;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Square(props) {
  return <StyledBox onClick={props.onClick}>{props.value}</StyledBox>;
}

export const StyledBoard = styled.div`
  height: 600px;
  margin-bottom: 1rem;
  background-color: #34495e;
  color: #fff;
  border: 6px solid #2c3e50;
  border-radius: 10px;

  display: grid;
  grid-template: repeat(3, 1fr) / repeat(3, 1fr);
`;

function Board() {
  const squares = useSelector(selectSquares);
  const winner = useSelector(selectWinner);
  const dispatch = useDispatch();

  const handleSquareClick = (position) => {
    if (winner || squares[position]) {
      return;
    }
    dispatch(markAction({ position }));
  };

  const renderSquare = (i) => {
    return (
      <Square key={i} value={squares[i]} onClick={() => handleSquareClick(i)} />
    );
  };

  return (
    <div>
      <StyledBoard>
        {
          squares.map((v, i) => {
            return renderSquare(i)
          })
        }
      </StyledBoard>
    </div>
  );
}

export const ActionBar = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const BoardContainer = styled.div`
  width: 600px;
  text-align: center;
  margin: 0 auto;
`;

function BoardScreen({ history }) {
  const dispatch = useDispatch();
  const nextPlayer = useSelector(selectNextPlayer);
  const xIsNext = useSelector(selectXIsNext);
  const winner = useSelector(selectWinner);

  const handleNewGameClick = () => {
    history.replace("/new-game");
    dispatch(newGame());
  };

  const handleResetClick = () => {
    dispatch(restartGame());
  };

  if (!nextPlayer) {
    handleNewGameClick();
  }

  let status;
  if (winner) {
    if (winner === 'tie') {
      status = `Tie !`
    } else {
      status = `Winner: ${nextPlayer} ${xIsNext ? "X" : "O"}`;
    }
  } else {
    status = `Current player: ${nextPlayer} ${xIsNext ? "X" : "O"}`;
  }

  return (
    <BoardContainer>
      <h1>{status}</h1>
      <Board />
      <ActionBar>
        <Button active onClick={handleNewGameClick}>
          New game
        </Button>
        <Button active onClick={handleResetClick}>
          Restart game
        </Button>
      </ActionBar>
    </BoardContainer>
  );
}

export default withRouter(BoardScreen);

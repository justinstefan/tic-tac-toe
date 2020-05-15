import React, { useState } from "react";
import { useDispatch } from 'react-redux'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components';

import { start } from '../app/gameSlice'
import { Container, Button } from '../common/Layout'

const InputGroup = styled.div`
  margin-bottom: 1rem;
  label {
    margin-right: 1rem;
  }
`;

function NewGame({ history }) {
  const dispatch = useDispatch();
  const [p1Name, setP1Name] = useState("");
  const [p2Name, setP2Name] = useState("");

  const canStartGame = p1Name && p2Name && p1Name !== p2Name

  const handleNewGameClick = () => {
    if(canStartGame) {
      dispatch(start({ player1: p1Name, player2: p2Name }))
      history.push('/board')
    }
  }

  return (
    <Container>
      <h1>Tic tac toe</h1>
      <InputGroup>
        <label htmlFor="player1">Choose player 1 name</label>
        <input type="text" name="player1" value={p1Name} onChange={e => setP1Name(e.target.value)}/>
      </InputGroup>
      <InputGroup>
        <label htmlFor="player2">Choose player 2 name</label>
        <input type="text" name="player2" value={p2Name} onChange={e => setP2Name(e.target.value)}/>
      </InputGroup>
      <Button active={canStartGame} onClick={handleNewGameClick}>Start New Game</Button>
    </Container>
  );
}

export default withRouter(NewGame)

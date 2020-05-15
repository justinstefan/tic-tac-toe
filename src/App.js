import React from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";

import NewGame from "./routes/NewGame";
import Board from "./routes/Board";

function App() {
  return (
    <Switch>
      <Route path="/new-game">
        <NewGame />
      </Route>
      <Route path="/board">
        <Board />
      </Route>
      <Redirect from="/" to="/new-game" />
    </Switch>
  );
}

export default App;

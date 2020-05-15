import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./app/store";
import App from "./App";

test("renders initial screen", () => {
  const { getByText } = render(
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  );

  expect(getByText(/Choose player 1 name/i)).toBeInTheDocument();
});

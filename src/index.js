import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore } from "redux";
import Root from "./containers/Root";
import app from "./reducers";

const store = createStore(
  app,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

render(
  <Router>
    <Root store={store} />
  </Router>,
  document.getElementById("root")
);

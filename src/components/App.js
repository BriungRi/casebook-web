import React from "react";
import { Redirect } from "react-router-dom";
import NewsFeedContainer from "../containers/NewsFeedContainer";

const App = ({ loggedIn }) => {
  if (loggedIn) {
    return <NewsFeedContainer />;
  } else {
    return <Redirect to={{ pathname: "/login" }} />;
  }
};

export default App;

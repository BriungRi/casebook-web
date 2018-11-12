import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { Route, withRouter } from "react-router-dom";
import Title from "./../components/Title";
import AppContainer from "./AppContainer";
import LoginContainer from "./LoginContainer";
import SignupContainer from "./SignupContainer";

const Root = ({ store }) => (
  <Provider store={store}>
    <div>
      <Title />
      <Route path="/" component={AppContainer} />
      <Route path="/login" component={withRouter(LoginContainer)} />
      <Route path="/signup" component={withRouter(SignupContainer)} />
    </div>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;

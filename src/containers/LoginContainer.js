import Login from "./../components/Login";
import { updateUsername, updatePassword, login } from "./../actions";
import { connect } from "react-redux";

const auth = (username, password) => {
  return { firstName: "test", lastName: "user", username: username };
};

const mapStateToProps = state => {
  return {
    loggedIn: state.loggedIn,
    username: state.username,
    password: state.password,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleUsernameChange: event => {
      dispatch(updateUsername(event.target.value));
      event.preventDefault();
    },
    handlePasswordChange: event => {
      dispatch(updatePassword(event.target.value));
      event.preventDefault();
    },
    login: (username, password) => {
      return event => {
        const res = auth(username, password);
        if (
          res.username !== undefined &&
          res.firstName !== undefined &&
          res.lastName !== undefined
        ) {
          dispatch(login(res.username, res.firstName, res.lastName));
        }
        event.preventDefault();
      };
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

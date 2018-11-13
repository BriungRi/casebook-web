import Login from "./../components/Login";
import { updateUsername, updatePassword, login } from "./../actions";
import { connect } from "react-redux";

// API: 
// In: {username: String, password: String}
// Out: { firstName: String, lastName: String, newsFeed: Array<FeedItem>}
const auth = (username, password) => {
  return { firstName: "test", lastName: "user", newsFeed=[], username: username };
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
          dispatch(login(res.username, res.firstName, res.lastName, res.newsFeed));
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

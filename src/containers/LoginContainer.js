import Login from "./../components/Login";
import {
  updateUsername,
  updatePassword,
  login,
  updateFollowing,
  updateAllUsers
} from "./../actions";
import { connect } from "react-redux";
import { auth, getFollowing, getAllUsers } from "./../network/api";

const mapStateToProps = state => {
  return {
    loggedIn: state.loggedIn,
    username: state.username,
    password: state.password
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
        auth(username, password, function(res1) {
          getFollowing(function(res2) {
            getAllUsers(function(res3) {
              if (res1.body.result === "success") {
                dispatch(login());
                dispatch(updateFollowing(res2.body.following));
                dispatch(updateAllUsers(res3.body.users));
              } else {
                alert("Incorrect username or password");
              }
            });
          });
        });
        event.preventDefault();
      };
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

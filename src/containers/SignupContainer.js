import Signup from "./../components/Signup";
import {
  updateFirstName,
  updateLastName,
  updateUsername,
  updatePassword,
} from "./../actions";
import { connect } from "react-redux";

const submitNewUser = (firstName, lastName, username, password) => {
  // send creds to server
};

const mapStateToProps = state => {
  return {
    username: state.username,
    password: state.password
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleFirstNameChange: event => {
      dispatch(updateFirstName(event.target.value));
      event.preventDefault();
    },
    handleLastNameChange: event => {
      dispatch(updateLastName(event.target.value));
      event.preventDefault();
    },
    handleUsernameChange: event => {
      dispatch(updateUsername(event.target.value));
      event.preventDefault();
    },
    handlePasswordChange: event => {
      dispatch(updatePassword(event.target.value));
      event.preventDefault();
    },
    signup: (firstName, lastName, username, password) => {
      return event => {
        const res = submitNewUser(firstName, lastName, username, password);
        if (
          res.username !== undefined &&
          res.firstName !== undefined &&
          res.lastName !== undefined
        ) {
          this.props.history.push("/login");
        }
        event.preventDefault();
      };
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);

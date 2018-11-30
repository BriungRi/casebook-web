import Signup from "./../components/Signup";
import { updateUsername, updatePassword } from "./../actions";
import { connect } from "react-redux";
import { makeUser } from "./../network/api";

const mapStateToProps = state => {
  return {
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
    signup: (username, password, history) => {
      return event => {
        makeUser(username, password, function(res) {
          console.log(res.body.result);
          if (res.error) {
            alert(res.error);
          } else if (res.body.result === "success") {
            history.push("/login");
          } else if (res.body.result === "exists") {
            alert("Username already in use");
          }
        });
        event.preventDefault();
      };
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);

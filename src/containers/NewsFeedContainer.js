import { connect } from "react-redux";
import { logout } from "./../actions";
import { rmSession } from "./../network/api";
import NewsFeed from "./../components/NewsFeed";

const mapStateToProps = state => {
  return {
    allUsers: state.allUsers,
    following: state.following
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: event => {
      rmSession(function(res) {
        dispatch(logout());
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsFeed);

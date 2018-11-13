import { connect } from "react-redux";
import UserPage from "../components/UserPage";

// API: 
// In: {userame}
// Out: {firstName: String, lastName: String, feed: Array<FeedItem>}
const getUserPayload = username => {
  return {
    firstName: "FirstName",
    lastName: "LastName",
    feed: [
      { posterUsername: username, text: "Hello1" },
      { posterUsername: username, text: "Hello2" }
    ]
  };
};

const mapStateToProps = (state, ownProps) => {
  const username = ownProps.match.params.username;
  const userPayload = getUserPayload(username);
  return {
    username: username,
    firstName: userPayload.firstName,
    lastName: userPayload.lastName,
    feed: userPayload.feed,
    loggedIn: state.loggedIn
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPage);

import { connect } from "react-redux";
import NewsFeed from "./../components/NewsFeed";
import { updatePostText, updateNewsFeed } from "./../actions";

const uploadPost = postText => {
  // Upload postText
  const res = {
    newsFeed: [
      { posterUsername: "testUser", text: postText },
      { posterUsername: "notherUser", text: "bye world" }
    ]
  };
  return res;
};

const mapStateToProps = state => {
  return {
    feed: state.newsFeed,
    postText: state.postText
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handlePostTextChange: event => {
      dispatch(updatePostText(event.target.value));
      event.preventDefault();
    },
    post: postText => {
      return event => {
        dispatch(updatePostText(""));
        const res = uploadPost(postText);
        dispatch(updateNewsFeed(res.newsFeed));
        event.preventDefault();
      };
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsFeed);

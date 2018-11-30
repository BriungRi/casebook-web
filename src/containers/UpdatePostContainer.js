import { connect } from "react-redux";
import { updatePost, posts } from "./../network/api";
import { updatePostTitle, updatePostText, updatePosts } from "./../actions";
import UpdatePost from "./../components/UpdatePost";

const mapStateToProps = (state, ownProps) => {
  const username = ownProps.match.params.username;
  const id = ownProps.match.params.id;
  return {
    username: username,
    id: id,
    postTitle: state.postTitle,
    postText: state.postText,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handlePostTitleChange: event => {
      dispatch(updatePostTitle(event.target.value));
      event.preventDefault();
    },
    handlePostTextChange: event => {
      dispatch(updatePostText(event.target.value));
      event.preventDefault();
    },
    updatePost: (username, id, postTitle, postText, history) => {
      return event => {
        updatePost({ id: id, title: postTitle, body: postText }, function(
          res1
        ) {
          posts(username, function(res2) {
            dispatch(updatePostTitle(""));
            dispatch(updatePostText(""));
            dispatch(updatePosts(res2.body.posts));
            history.push("/user/" + username);
          });
        });
      };
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdatePost);

import { connect } from "react-redux";
import UserPage from "../components/UserPage";
import {
  follow,
  unfollow,
  posts,
  post,
  deleteUser,
  deletePost,
  getFollowing
} from "./../network/api";
import {
  updatePosts,
  updatePostText,
  updatePostTitle,
  updateFollowing,
  logout
} from "./../actions";

const mapStateToProps = (state, ownProps) => {
  const username = ownProps.match.params.username;

  return {
    postTitle: state.postTitle,
    postText: state.postText,
    updating: false,
    posts: state.posts,
    username: username,
    loggedIn: state.loggedIn,
    isOwnPage: state.username === username,
    following: state.following.includes(username)
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
    initiate: username => {
      posts(username, function(res) {
        dispatch(updatePosts(res.body.posts));
      });
    },
    follow: username => {
      return event => {
        follow(username, function(res1) {
          getFollowing(function(res2) {
            dispatch(updateFollowing(res2.body.following));
          });
        });
        event.preventDefault();
      };
    },
    unfollow: username => {
      return event => {
        unfollow(username, function(res1) {
          getFollowing(function(res2) {
            dispatch(updateFollowing(res2.body.following));
          });
        });
        event.preventDefault();
      };
    },
    post: (username, postTitle, postText) => {
      return event => {
        post({ title: postTitle, body: postText }, function() {
          posts(username, function(res2) {
            dispatch(updatePostTitle(""));
            dispatch(updatePostText(""));
            dispatch(updatePosts(res2.body.posts));
          });
        });
        event.preventDefault();
      };
    },
    updatePost: (username, history) => {
      return id => {
        return event => {
          history.push("/update/" + username + "/" + id);
          event.preventDefault();
        };
      };
    },
    deletePost: username => {
      return postId => {
        return event => {
          deletePost(postId, function(res1) {
            posts(username, function(res2) {
              dispatch(updatePosts(res2.body.posts));
            });
          });
          event.preventDefault();
        };
      };
    },
    deleteAccount: history => {
      return event => {
        deleteUser(function(res) {
          dispatch(logout());
          history.push("/login");
        });
        event.preventDefault();
      };
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPage);

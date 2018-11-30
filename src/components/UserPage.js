import React, { Component } from "react";
import FeedList from "./FeedList";
import PostArea from "./PostArea";
import { Link } from "react-router-dom";

class UserPage extends Component {
  componentDidMount() {
    this.props.initiate(this.props.username);
  }

  render() {
    const curriedPost = this.props.post(
      this.props.username,
      this.props.postTitle,
      this.props.postText
    );
    const curriedUpdatePost = this.props.updatePost(this.props.username, this.props.history);
    const curriedDeletePost = this.props.deletePost(this.props.username);
    const curriedDeleteAccount = this.props.deleteAccount(this.props.history);
    return (
      <div>
        {this.props.isOwnPage ? (
          <PostArea
            postTitle={this.props.postTitle}
            postText={this.props.postText}
            handlePostTitleChange={this.props.handlePostTitleChange}
            handlePostTextChange={this.props.handlePostTextChange}
            updating={false}
            post={curriedPost}
          />
        ) : null}
        <Link to="/">Back to Home</Link>
        <h2>{this.props.username}</h2>
        {this.props.loggedIn && !this.props.isOwnPage ? (
          this.props.following ? (
            <button onClick={this.props.unfollow(this.props.username)}>
              Unfollow
            </button>
          ) : (
            <button onClick={this.props.follow(this.props.username)}>
              Follow
            </button>
          )
        ) : null}
        <FeedList
          feed={this.props.posts}
          canDelete={this.props.isOwnPage}
          updatePost={curriedUpdatePost}
          deletePost={curriedDeletePost}
        />
        {this.props.isOwnPage ? (
          <button onClick={curriedDeleteAccount}>Delete Account</button>
        ) : null}
      </div>
    );
  }
}

export default UserPage;

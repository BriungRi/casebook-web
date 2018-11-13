import React from "react";
import PostArea from "./../components/PostArea";
import FeedList from "./FeedList";

const NewsFeed = ({ postText, feed, handlePostTextChange, post }) => {
  return (
    <div>
      <PostArea
        postText={postText}
        handlePostTextChange={handlePostTextChange}
        post={post(postText)}
      />
      <FeedList feed={feed} />
    </div>
  );
};

export default NewsFeed;

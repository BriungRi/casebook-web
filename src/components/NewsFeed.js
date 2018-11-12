import React from "react";
import FeedItem from "./../components/FeedItem";
import PostArea from "./../components/PostArea";

const NewsFeed = ({ postText, feed, handlePostTextChange, post }) => {
  return (
    <div>
      <PostArea postText={postText} handlePostTextChange={handlePostTextChange} post={post(postText)} />
      <ul>
        {feed.map((feedItem, index) => (
          <FeedItem key={index} {...feedItem} />
        ))}
      </ul>
    </div>
  );
};

export default NewsFeed;

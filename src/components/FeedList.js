import React from "react";
import FeedItem from "./../components/FeedItem";

const FeedList = ({ feed, canDelete, updatePost, deletePost }) => {
  return (
    <ul>
      {feed.map((feedItem, index) => (
        <FeedItem
          key={index}
          {...feedItem}
          canDelete={canDelete}
          updatePost={updatePost}
          deletePost={deletePost}
        />
      ))}
    </ul>
  );
};

export default FeedList;

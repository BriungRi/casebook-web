import React from "react";
import FeedItem from "./../components/FeedItem";

const FeedList = ({ feed, canDelete, deletePost }) => {
  return (
    <ul>
      {feed.map((feedItem, index) => (
        <FeedItem
          key={index}
          {...feedItem}
          canDelete={canDelete}
          deletePost={deletePost}
        />
      ))}
    </ul>
  );
};

export default FeedList;

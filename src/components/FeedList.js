import React from "react";
import FeedItem from "./../components/FeedItem";

const FeedList = ({ feed }) => {
  return (
    <ul>
      {feed.map((feedItem, index) => (
        <FeedItem key={index} {...feedItem} />
      ))}
    </ul>
  );
};

export default FeedList;

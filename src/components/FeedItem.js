import React from "react";

const FeedItem = ({ posterUsername, text }) => {
  return (
    <div>
      <h3>{posterUsername}</h3>
      <p>{text}</p>
      <hr/>
    </div>
  );
};

export default FeedItem;
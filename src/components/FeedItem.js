import React from "react";
import { Link } from "react-router-dom";

const FeedItem = ({ posterUsername, text }) => {
  return (
    <div>
      <Link to={"/user/" + posterUsername}>{posterUsername}</Link>
      <p>{text}</p>
      <hr />
    </div>
  );
};

export default FeedItem;

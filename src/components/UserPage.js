import React from "react";
import FeedList from "./FeedList";
import { Link } from "react-router-dom";

const UserPage = ({ firstName, lastName, username, feed, loggedIn }) => {
  const followButton = loggedIn ? <button>Follow</button> : null;
  return (
    <div>
      <Link to="/">Back to Home</Link>
      <h2>
        {firstName} {lastName} ({username})
      </h2>
      {followButton}
      <FeedList feed={feed} />
    </div>
  );
};

export default UserPage;

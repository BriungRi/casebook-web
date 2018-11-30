import React from "react";
import { Link } from "react-router-dom";

const FeedItem = ({
  id,
  author_username,
  title,
  body,
  time,
  canDelete,
  deletePost
}) => {
  const curriedDeletePost = deletePost(id);
  return (
    <div>
      <h3>{title}</h3>
      <h4>{body}</h4>
      <p>
        written by{" "}
        <Link to={"/user/" + author_username}>{author_username}</Link>
      </p>
      <p>posted at {time}</p>
      {canDelete ? (
        <button onClick={curriedDeletePost}>Delete Post</button>
      ) : null}
      <hr />
    </div>
  );
};

export default FeedItem;

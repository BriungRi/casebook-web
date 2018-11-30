import React from "react";
import { Link } from "react-router-dom";

const getReadableTime = UNIX_timestamp => {
  var a = new Date(UNIX_timestamp * 1000);
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
  var time =
    date + " " + month + " " + year + " " + hour + ":" + min + ":" + sec;
  return time;
};

const FeedItem = ({
  id,
  author_username,
  title,
  body,
  time,
  canDelete,
  updatePost,
  deletePost
}) => {
  const curriedDeletePost = deletePost(id);
  const curriedUpdatePost = updatePost(id);
  return (
    <div>
      <h3>{title}</h3>
      <h4>{body}</h4>
      <p>
        written by{" "}
        <Link to={"/user/" + author_username}>{author_username}</Link>
      </p>
      <p>posted at {getReadableTime(time)}</p>
      {canDelete ? (
        <button onClick={curriedUpdatePost}>Update Post</button>
      ) : null}
      {canDelete ? (
        <button onClick={curriedDeletePost}>Delete Post</button>
      ) : null}
      <hr />
    </div>
  );
};

export default FeedItem;

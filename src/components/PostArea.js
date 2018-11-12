import React from "react";

const PostArea = ({ postText, handlePostTextChange, post }) => {
  return (
    <div>
      <textarea
        onChange={handlePostTextChange}
        value={postText}
        placeholder="Write a post!"
        rows="4"
        cols="50"
      />
      <br />
      <button onClick={post}>Post</button>
    </div>
  );
};

export default PostArea;

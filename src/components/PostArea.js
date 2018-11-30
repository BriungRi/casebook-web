import React from "react";

const PostArea = ({
  postTitle,
  postText,
  handlePostTitleChange,
  handlePostTextChange,
  updating,
  post
}) => {
  return (
    <div>
      <textarea
        onChange={handlePostTitleChange}
        value={postTitle}
        placeholder="Post Title"
        rows="1"
        cols="50"
      />
      <br/>
      <textarea
        onChange={handlePostTextChange}
        value={postText}
        placeholder="Post Body"
        rows="4"
        cols="50"
      />
      <br />
      <button onClick={post}>{updating ? "Update" : "Post"}</button>
    </div>
  );
};

export default PostArea;

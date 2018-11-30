import React from "react";
import PostArea from "./PostArea";

const UpdatePost = ({
  id,
  username,
  postTitle,
  postText,
  handlePostTitleChange,
  handlePostTextChange,
  updatePost,
  history
}) => {
  const curriedUpdatePost = updatePost(
    username,
    id,
    postTitle,
    postText,
    history
  );
  return (
    <div>
      <PostArea
        postTitle={postTitle}
        postText={postText}
        handlePostTitleChange={handlePostTitleChange}
        handlePostTextChange={handlePostTextChange}
        updating={true}
        post={curriedUpdatePost}
      />
    </div>
  );
};

export default UpdatePost;

import React from "react";
import UserList from "./UserList";

const NewsFeed = ({ following, allUsers, logout }) => {
  console.log(following);
  return (
    <div>
      {/* <PostArea
        postText={postText}
        handlePostTextChange={handlePostTextChange}
        post={post(postText)}
      /> */}
      <h2>Follow List</h2>
      <UserList users={following} />
      <h2>All Users</h2>
      <UserList users={allUsers} />
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default NewsFeed;

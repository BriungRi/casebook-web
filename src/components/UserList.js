import React from "react";
import { Link } from "react-router-dom";

const UserList = ({ users }) => {
  return (
    <ul>
      {users.map((username, index) => (
        <div key={index}>
          <Link to={"/user/" + username}>{username}</Link>
          <br />
        </div>
      ))}
    </ul>
  );
};

export default UserList;

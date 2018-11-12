import React from "react";
import { Link } from "react-router-dom";
import "./../style/Login.css";

const Signup = ({
  firstName,
  lastName,
  username,
  password,
  handleFirstNameChange,
  handleLastNameChange,
  handleUsernameChange,
  handlePasswordChange,
  signup
}) => {
  return (
    <div className="Login">
      <form onSubmit={signup(firstName, lastName, username, password)}>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={handleFirstNameChange}
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={handleLastNameChange}
          />
        </label>
        <br />
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        <br />
        <input type="submit" value="Sign Up" />
      </form>
      <nav>
        <Link to="/login">Already have an account? Log in here</Link>
      </nav>
    </div>
  );
};

export default Signup;

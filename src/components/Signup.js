import React from "react";
import { Link } from "react-router-dom";
import "./../style/Login.css";

const Signup = ({
  username,
  password,
  handleUsernameChange,
  handlePasswordChange,
  history,
  signup
}) => {
  const curriedSignup = signup(username, password, history)
  return (
    <div className="Login">
      <form onSubmit={curriedSignup}>
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

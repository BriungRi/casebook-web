import React from "react";
import { Link, Redirect } from "react-router-dom";
import "./../style/Login.css";

const Login = ({
  loggedIn,
  username,
  password,
  handleUsernameChange,
  handlePasswordChange,
  login
}) => {
  if (loggedIn)
    return (
      <Redirect
        to={{
          pathname: "/"
        }}
      />
    );
  return (
    <div className="Login">
      <form onSubmit={login(username, password)}>
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
        <input type="submit" value="Log In" />
      </form>
      <nav>
        <Link to="/signup">No account yet? Sign up here</Link>
      </nav>
    </div>
  );
};

export default Login;

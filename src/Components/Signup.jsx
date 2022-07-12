import React, { useState } from "react";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";

const Signup = ({ isLoggedIn, setIsLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const signUpHandler = (e) => {
    e.preventDefault();
    axios
      .post("/auth/signup", { username: username, password: password })
      .then((results) => {
        setIsLoggedIn(true);
      })
      .catch((error) => {
        console.log(error);
        //!Throw Toast
      });
  };

  return (
    <div className="signup-parent">
      {isLoggedIn && <Navigate to="/" />}
      <form onSubmit={signUpHandler}>
        <label htmlFor="">Username:</label>
        <input
          type="text"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <br />
        <label htmlFor="">Password:</label>
        <input
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <br />
        <button type="submit">Butt On</button>

        <Link to="/">
          <div>Login</div>
        </Link>
      </form>
    </div>
  );
};

export default Signup;

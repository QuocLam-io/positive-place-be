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


  /* -------------------------------------------------------------------------- */

  return (
    <div className="signup-parent">
      {isLoggedIn && <Navigate to="/" />}


      <form
        className="signup-form
      "
        onSubmit={signUpHandler}
      >
        <p className="create-account">Create an account</p>

        <input
          type="text"
          placeholder="Choose a username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />

        <input
          type="password"
          placeholder="Choose a password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <button type="submit">Butt On</button>
      </form>

      <div className="login-redirect">
        <p>Already have an account?</p>
        <Link to="/">
          <div>Login</div>
        </Link>
      </div>
    </div>
  );
};

export default Signup;

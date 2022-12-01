import React, { useState } from "react";
import axios from "../axios";
import { Link, Navigate } from "react-router-dom";

const Signup = ({ isLoggedIn, setIsLoggedIn, isDarkMode }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const signUpHandler = (e) => {
    e.preventDefault();
    axios
      .post("https://positive-place-be.herokuapp.app/auth/signup", {
        username: username,
        password: password,
      })
      .then((results) => {
        setIsLoggedIn(true);
      })
      .catch((error) => {
        console.log(error);
        //!Throw Toast
      });

    // setUsername("");
    // setPassword("");
  };

  /* -------------------------------------------------------------------------- */

  return (
    <div className={`signup-parent ${isDarkMode ? "text-white" : ""}`}>
      {isLoggedIn && <Navigate to="/" />}

      <div className={`mobile-logo ${isDarkMode && "flex-end"}`}>
        <img
          src={`${
            isDarkMode ? "imgs/logo-negative.png" : "imgs/logo-positive.png"
          }`}
          alt="blub"
        />
      </div>

      <form className="signup-form" onSubmit={signUpHandler}>
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
          minLength="6"
          placeholder="Choose a password"
          onChange={(e) => {
            setPassword(e.target.value);
            // e.target.value = ""
          }}
        />

        <button className="signup-btn" type="submit">
          Sign Up
        </button>
      </form>

      <div className="signup-redirect">
        <p>Already have an account?</p>
        <Link to="/">
          <p>
            <strong>Login</strong>
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Signup;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "../axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = ({ setIsLoggedIn, isDarkMode, setPositiveEntries, logoText }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  /* ------------------------------- Throw Toast ------------------------------ */
  const notify = () => {
    toast();
    toast.error("Sorry, no user found by that name", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  /* ------------------------------ Login Handler ----------------------------- */

  const loginHandler = (e) => {
    e.preventDefault();

    axios
      .post("https://positive-place-be.herokuapp.com/auth/login", {
        username: username,
        password: password,
      })
      .then((results) => {
        setIsLoggedIn(true);
      })
      .catch(() => {
        notify();
      });
  };

  /* -------------------------------------------------------------------------- */

  return (
    <div className={`login-parent ${isDarkMode ? "text-white" : ""} `}>

      <div className={`mobile-logo`}>
      <img 
            src={`${
              isDarkMode ? "imgs/logo-negative.png" : "imgs/logo-positive.png"
            }`}
            alt="blub"
          />
        {/* <div className="mobile-logo-top">
          <p>{logoText[0]}</p>
        </div>
        <div className="mobile-logo-bottom">
        <p>{logoText[1]}</p>

        </div> */}
      </div>
      
      <form className="login-form" onSubmit={loginHandler}>
        <p className="welcome">Welcome Back</p>

        <input
          type="text"
          placeholder="Username"
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />

        <button className="login-butt" type="submit">
          Log In
        </button>
      </form>

      <div className="login-redirect">
        <p>Don't have an account yet? </p>
        <Link to="/signup">
          <p>
            <strong>Signup</strong>
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Login;

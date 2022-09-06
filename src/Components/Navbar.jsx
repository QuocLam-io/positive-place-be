import React from "react";
import { Link } from "react-router-dom";
import axios from "../axios";

const Navbar = ({ isDarkMode, isLoggedIn, setIsLoggedIn }) => {
  const logOutHandler = () => {
    axios
      .post("https://positive-place-be.herokuapp.com/auth/logout")
      .then(() => {
        setIsLoggedIn(false);
      });
  };

  return (
    <div
      className={`navbar-parent 
      ${isDarkMode ? "nav-dark" : "nav-light"}
      ${isLoggedIn ? "nav-mobile" : "nav-hidden"}
  
      `}
    >
      <div className={`nav-top-btns
       ${isDarkMode && "row-reverse"}
      `}>
        <Link className="nav-logo" to="/">
          <img
            src={`${
              isDarkMode ? "imgs/logo-negative.png" : "imgs/logo-positive.png"
            }`}
            alt="blub"
          />
        </Link>
        <div className="hamburger">

        </div>
        <div className="nav-links-mobile-hidden">
          <Link
            to="/signup"
            className={`signin-btn ${isLoggedIn ? "hidden" : ""} ${
              isDarkMode ? "dark-bg" : ""
            }`}
          >
            <button onClick={logOutHandler}>Sign Up</button>
          </Link>

          <Link
            to="/"
            className={`signout-btn grey ${isLoggedIn ? "" : "hidden"}`}
          >
            <button>Write a post</button>
          </Link>
          <Link
            to="/history-page"
            className={`signout-btn ${isLoggedIn ? "" : "hidden"}`}
          >
            <button>My Entries</button>
          </Link>
          <Link
            to="/remember-why"
            className={`signout-btn ${isLoggedIn ? "" : "hidden"}`}
          >
            <button>Homer Simpson</button>
          </Link>
        </div>
      </div>
      <Link
        to="/"
        className={`signout-btn nav-links-mobile-hidden ${
          isLoggedIn ? "" : "hidden"
        }`}
      >
        <button
          className={`${isDarkMode && "text-white"}`}
          onClick={logOutHandler}
        >
          Log out
        </button>
      </Link>
    </div>
  );
};

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
import axios from "../axios";

const Navbar = ({
  isDarkMode,
  setIsDarkMode,
  darkModeHandler,
  isLoggedIn,
  setIsLoggedIn,
}) => {
  const logOutHandler = () => {
    axios
      .post("https://positive-place-be.herokuapp.com/auth/logout")
      .then(() => {
        setIsLoggedIn(false);
      });
    // .catch(err => {

    // }); Figure toast notification for error
  };

  return (
    <div
      className={`navbar-parent ${isDarkMode ? "nav-dark" : "nav-light"}
      `}
    >
      <div className="nav-top-butts">
        <Link className="nav-logo" to="/">
          <img
            src={`${
              isDarkMode ? "imgs/logo-negative.png" : "imgs/logo-positive.png"
            }`}
            alt="blub"
          />
        </Link>

        <Link
          to="/signup"
          className={`signin-butt ${isLoggedIn ? "hidden" : ""} ${
            isDarkMode ? "dark-bg" : ""
          }`}
        >
          <button onClick={logOutHandler}>Sign Up</button>
        </Link>

        <Link
          to="/"
          className={`signout-butt grey ${isLoggedIn ? "" : "hidden"}`}
        >
          <button>Write a post</button>
        </Link>
        <Link
          to="/history-page"
          className={`signout-butt ${isLoggedIn ? "" : "hidden"}`}
        >
          <button>My Entries</button>
        </Link>
        <Link
          to="/remember-why"
          className={`signout-butt ${isLoggedIn ? "" : "hidden"}`}
        >
          <button>Homer Simpson</button>
        </Link>

        <button className="merp" onClick={darkModeHandler}>
          Mr. Merp
        </button>
      </div>
      <Link to="/" className={`signout-butt ${isLoggedIn ? "" : "hidden"}`}>
        <button onClick={logOutHandler}>Log out</button>
      </Link>
    </div>
  );
};

export default Navbar;

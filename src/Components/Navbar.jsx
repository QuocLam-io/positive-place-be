import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({
  isDarkMode,
  setIsDarkMode,
  darkModeHandler,
  isLoggedIn,
  setIsLoggedIn,
}) => {
  const logOutHandler = () => {
    setIsLoggedIn(false);
  };

  return (
    <div
      className={`navbar-parent ${isDarkMode ? "nav-dark" : "nav-light"}
    `}
    >
      <Link className="nav-logo" to="/">
        <img
          src={`${
            isDarkMode ? "imgs/logo-negative.png" : "imgs/logo-positive.png"
          }`}
          alt="blub"
        />
      </Link>

      <button onClick={darkModeHandler}>Mr. Merp</button>

      <Link
        to="/"
        className={`signout-butt ${isLoggedIn ? "" : "hidden"}
          `}
      >
        <button onClick={logOutHandler}>Signout</button>
      </Link>
    </div>
  );
};

export default Navbar;

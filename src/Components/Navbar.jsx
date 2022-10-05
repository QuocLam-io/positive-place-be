import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "../axios";
import { AnimatePresence } from "framer-motion";
import MobileMenu from "./MobileMenu";

const Navbar = ({ isDarkMode, isLoggedIn, setIsLoggedIn }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuOpenHandler = () => {
    setMenuOpen(true);
  };
  const menuCloseHandler = () => {
    setMenuOpen(false);
  };

  const logOutHandler = () => {
    axios
      .post("https://positive-place-be..up.railway.app/auth/logout")
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
      <div
        className={`nav-top-btns
       ${isDarkMode && "row-reverse"}
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
        <div
          onClick={menuOpenHandler}
          className={`hamburger 
        ${isDarkMode && "dark-hamburger"}
        `}
        >
          <div
            className={`
            ${isDarkMode ? "dark-patty" : "patty"}
          `}
          ></div>
          <div
            className={`
            ${isDarkMode ? "dark-patty" : "patty"}
          `}
          ></div>
          <div
            className={`
            ${isDarkMode ? "dark-patty" : "patty"}
          `}
          ></div>
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

      <AnimatePresence
        inital={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {menuOpen && (
          <MobileMenu
            isDarkMode={isDarkMode}
            menuCloseHandler={menuCloseHandler}
            logOutHandler={logOutHandler}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;

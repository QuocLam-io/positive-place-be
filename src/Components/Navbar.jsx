import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Navbar = ({
  isDarkMode,
  setIsDarkMode,
  darkModeHandler,
  isLoggedIn,
  setIsLoggedIn,
}) => {
  const logOutHandler = () => {
    axios.post("/auth/logout").then(() => {
      setIsLoggedIn(false);
    });
    // .catch(err => {

    // }); Figure toast notification for error
  };
  const notify = () => toast("Jillian's boney ass!");

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

      <Link to="/history-page">My Entries</Link>
      <Link to="/remember-why">Homer Simpson</Link>
      <Link to="/positive-edit">Positive Edit</Link>
      <Link to="/negative-edit">Negative Edit</Link>

      <div>
        <button onClick={notify}>Notify!</button>
        <ToastContainer />
      </div>

      <Link
        to="/signup"
        className={`signin-butt ${isLoggedIn ? "hidden" : ""}`}
      >
        <button onClick={logOutHandler}>Sign In</button>
      </Link>

      <Link to="/" className={`signout-butt ${isLoggedIn ? "" : "hidden"}`}>
        <button onClick={logOutHandler}>Log out</button>
      </Link>

      <button onClick={darkModeHandler}>Mr. Merp</button>
    </div>
  );
};

export default Navbar;

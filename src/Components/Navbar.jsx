import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ isDarkMode, setIsDarkMode, darkModeHandler }) => {
  return (
    <div className={`navbar-parent ${isDarkMode ? "nav-dark" :
    "nav-light"}
    `}>
      <div className="logo">Logo Button</div>
      <div className="navbar">
        <Link to="/signup">
          <div>Signup</div>
        </Link>
        <Link to="/">
          <div className="signout-butt">Signout</div>
        </Link>
      </div>
      <button onClick={darkModeHandler} >Murp</button>
    </div>
  );
};

export default Navbar;

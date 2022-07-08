import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-parent">
      <div className="navbar">
        <Link to="/signup">
          <div>Signup</div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

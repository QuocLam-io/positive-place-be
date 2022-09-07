import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const MobileMenu = ({ menuCloseHandler, logOutHandler, isDarkMode }) => {
  return (
    <motion.div
      className={`menu-parent
      ${isDarkMode && "menu-parent-dark"}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="menu-close-btn">
        <p onClick={menuCloseHandler}>Close</p>
        <p className="menu-close-btn" onClick={menuCloseHandler}>x</p>
      </div>
      <div className="menu-links">
        <div className="menu-link" onClick={menuCloseHandler}>
          <Link to="/">Home</Link>
        </div>
        <div onClick={menuCloseHandler} className="menu-link">
          <Link to="/history-page">My Entries</Link>
        </div>
        <div onClick={logOutHandler} className="menu-link">
          Log out
        </div>
      </div>
    </motion.div>
  );
};

export default MobileMenu;

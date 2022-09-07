import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const MobileMenu = ({ menuCloseHandler, logOutHandler }) => {
  return (
    <motion.div
      className="menu-parent"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="menu-close-btn">
        <p onClick={menuCloseHandler}>Close</p>
        <button onClick={menuCloseHandler}>x</button>
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

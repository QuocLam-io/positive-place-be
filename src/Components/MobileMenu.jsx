import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const MobileMenu = ({ menuCloseHandler }) => {
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
        <div className="menu-link">
          <Link to="/">Home</Link>
        </div>
        <div className="menu-link">
          <Link to="/history-page">My Entries</Link>
        </div>
        <div className="menu-link">Log out</div>
      </div>
    </motion.div>
  );
};

export default MobileMenu;

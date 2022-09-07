import React from "react";
import { motion } from "framer-motion";

const MobileMenu = ({ menuCloseHandler }) => {
  return (
    <motion.div
      className="menu-parent"
      // onClick={menuCloseHandler}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="menu-close-btn">

      </div>
      <div className="menu-links">
        <div className="menu-link">Home</div>
        <div className="menu-link">My Entries</div>
        <div className="menu-link">Log out</div>
      </div>
    </motion.div>
  );
};

export default MobileMenu;

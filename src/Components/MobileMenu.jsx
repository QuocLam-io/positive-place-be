import React from "react";
import { motion } from "framer-motion";

const MobileMenu = ({ menuCloseHandler }) => {
  return;

  <motion.div
    className="menu-parent"
    onClick={menuCloseHandler}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    hello
  </motion.div>;
};

export default MobileMenu;

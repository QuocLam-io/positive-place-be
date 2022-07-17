import React from "react";
import { motion } from "framer-motion";

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

const PositiveModal = () => {
  return (
    <motion.div
      onClick={(e) => e.stopPropagation()}
      className="positive-modal-parent modal"
      variants={dropIn}
      initial="hidden"
      animate="visible"
      exit="exit"
    ></motion.div>
  );
};

export default PositiveModal;

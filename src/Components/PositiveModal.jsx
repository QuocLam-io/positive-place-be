import React from "react";
import { motion } from "framer-motion";
import Backdrop from "./Backdrop";

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

const PositiveModal = ({ modalClose }) => {
  return (
    <Backdrop modalClose={modalClose}>
      <motion.div
        className="positive-modal-parent modal"
        onClick={(e) => e.stopPropagation()}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <button onClick={modalClose}>Booty Out</button>
      </motion.div>
    </Backdrop>
  );
};

export default PositiveModal;

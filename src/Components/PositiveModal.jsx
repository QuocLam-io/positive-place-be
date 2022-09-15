import React from "react";
import { Link } from "react-router-dom";
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
        className="modal"
        onClick={(e) => e.stopPropagation()}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="modal-header">
          <p>Post entered!</p>
          <button onClick={modalClose}>X</button>
        </div>
        <div className="modal-text">
          <p>You can view your entries in the My Entries tab</p>
        </div>
        <div className="modal-footer">
          <Link to="/history-page">
            <p>Go to My Entries</p>
          </Link>
          <button className="modal-btn" onClick={modalClose}>
            Done
          </button>
        </div>
      </motion.div>
    </Backdrop>
  );
};

export default PositiveModal;

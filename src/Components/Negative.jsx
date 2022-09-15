import axios from "../axios";
import React, { useState } from "react";
import moment from "moment";
import { motion, AnimatePresence } from "framer-motion";
import PositiveModal from "./PositiveModal";

const Negative = ({
  negativeEntries,
  setNegativeEntries,
  months,
  isDarkMode,
}) => {
  const [positiveModalOpen, setPositiveModalOpen] = useState(false);
  const [negativeOne, setNegativeOne] = useState("");
  const [negativeTwo, setNegativeTwo] = useState("");
  const [negativeThree, setNegativeThree] = useState("");

  const modalOpen = () => {
    setPositiveModalOpen(true);
  };
  const modalClose = () => {
    setPositiveModalOpen(false);
  };

  const weekday = moment().format("dddd");

  let today = new Date();
  let dd = today.getDate();
  let mm = months[today.getMonth()];
  let yyyy = today.getFullYear();

  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }

  today = `${weekday}, ${mm} ${dd}, ${yyyy}`;

  const handleNegative = (e) => {
    e.preventDefault();
    axios
      .post("https://positive-place-be.herokuapp.com/api/negative", {
        todayOne: negativeOne,
        todayTwo: negativeTwo,
        todayThree: negativeThree,
      })
      .then((res) => {
        setNegativeEntries([...negativeEntries, res.data]);
        console.log(res.data);
      });
    positiveModalOpen ? modalClose() : modalOpen();
  };
  return (
    <div className={`negative-parent ${isDarkMode ? "text-white" : ""}`}>
      <div className="negative-header ">
        <p className="negative-header-date">{today}</p>
        <p>Today I feel hateful for</p>
      </div>

      <form onSubmit={handleNegative} className="negative-input-form" action="">
        <input 
          onChange={(e) => {
            setNegativeOne(e.target.value);
          }}
          type="text"
          placeholder="1. You're just a warm body to pass time with"
        />
        <input
          onChange={(e) => {
            setNegativeTwo(e.target.value);
          }}
          type="text"
          placeholder="2. Your best quality is your dad's money"
        />
        <input
          onChange={(e) => {
            setNegativeThree(e.target.value);
          }}
          type="text"
          placeholder="3. Remember, there's a &ldquo;u&rdquo; in failure"
        />

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="login-btn"
          type="submit"
          disabled={positiveModalOpen}
        >
          Done
        </motion.button>
      </form>

      <AnimatePresence
        inital={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {positiveModalOpen && <PositiveModal 
        isDarkMode={isDarkMode}
        modalClose={modalClose} />}
      </AnimatePresence>
    </div>
  );
};

export default Negative;

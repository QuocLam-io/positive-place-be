import axios from "axios";
import React, { useState } from "react";
import moment from "moment";
import { motion, AnimatePresence } from "framer-motion";
import PositiveModal from "./PositiveModal";

const Positive = ({ positiveEntries, setPositiveEntries, months }) => {
  const [positiveModalOpen, setPositiveModalOpen] = useState(false);
  const [positiveOne, setPositiveOne] = useState("");
  const [positiveTwo, setPositiveTwo] = useState("");
  const [positiveThree, setPositiveThree] = useState("");


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

  const handlePositive = (e) => {
    e.preventDefault();
    axios
      .post("https://positive-place-be.herokuapp.com/api/positive", {
        todayOne: positiveOne,
        todayTwo: positiveTwo,
        todayThree: positiveThree,
      })
      .then((res) => {
        setPositiveEntries([...positiveEntries, res.data]);
        console.log(res.data);
      });
    positiveModalOpen ? modalClose() : modalOpen();
  };
  return (
    <div className="positive-parent">
      <div className="positive-header">
        <p>{today}</p>
        <p>Today I'm grateful for</p>
      </div>

      <form onSubmit={handlePositive} className="positive-input-form" action="">
        <input
          onChange={(e) => {
            setPositiveOne(e.target.value);
          }}
          type="text"
          placeholder="1. Popeye's gravy"
        />
        <input
          onChange={(e) => {
            setPositiveTwo(e.target.value);
          }}
          type="text"
          placeholder="2. Julia's eyes"
        />
        <input
          onChange={(e) => {
            setPositiveThree(e.target.value);
          }}
          type="text"
          placeholder="3. The soft glow of blue fire on the kitchen stove while cooking at night"
        />

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="login-butt"
          type="submit"
        >
          Done
        </motion.button>
      </form>

      <AnimatePresence
        inital={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {positiveModalOpen && (
          <PositiveModal
            modalClose={modalClose}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Positive;

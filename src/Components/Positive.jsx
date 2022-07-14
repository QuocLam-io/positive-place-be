import axios from "axios";
import React, { useState } from "react";

const Positive = ({positiveEntries, setPositiveEntries}) => {
  const [positiveOne, setPositiveOne] = useState("");
  const [positiveTwo, setPositiveTwo] = useState("");
  const [positiveThree, setPositiveThree] = useState("");


  const handlePositive = (e) => {
    e.preventDefault();
    axios.post("/api/positive", {
      todayOne: positiveOne,
      todayTwo: positiveTwo,
      todayThree: positiveThree,
    })
      .then((res) => {
        setPositiveEntries([...positiveEntries, res.data]);
        console.log(res.data);
      })
  };
  return (
    <div className="positive-parent">
      <div className="positive-header">
        <p>Date here</p>
        <p>Today I feel grateful for</p>
      </div>

      <form onSubmit={handlePositive} className="positive-input-form" action="">
        <input
          onChange={(e) => {
            setPositiveOne(e.target.value);
          }}
          type="text"
          placeholder="Posiive One"
        />
        <input
          onChange={(e) => {
            setPositiveTwo(e.target.value);
          }}
          type="text"
          placeholder="Posiive Two"
        />
        <input
          onChange={(e) => {
            setPositiveThree(e.target.value);
          }}
          type="text"
          placeholder="Posiive Three"
        />

        <button type="submit">Done</button>
      </form>
    </div>
  );
};

export default Positive;

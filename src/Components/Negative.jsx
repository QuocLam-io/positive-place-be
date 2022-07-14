import axios from "axios";
import React, { useState } from "react";

const Negative = ({negativeEntries, setNegativeEntries}) => {
  const [negativeOne, setNegativeOne] = useState("");
  const [negativeTwo, setNegativeTwo] = useState("");
  const [negativeThree, setNegativeThree] = useState("");


  const handleNegative = (e) => {
    e.preventDefault();
    axios.post("/api/negative", {
      todayOne: negativeOne,
      todayTwo: negativeTwo,
      todayThree: negativeThree,
    })
      .then((res) => {
        setNegativeEntries([...negativeEntries, res.data]);
        console.log(res.data);
      })
  };
  return (
    <div className="negative-parent">
      <div className="negative-header">
        <p>Date here</p>
        <p>Today I feel grateful for</p>
      </div>

      <form onSubmit={handleNegative} className="negative-input-form" action="">
        <input
          onChange={(e) => {
            setNegativeOne(e.target.value);
          }}
          type="text"
          placeholder="Negative One"
        />
        <input
          onChange={(e) => {
            setNegativeTwo(e.target.value);
          }}
          type="text"
          placeholder="Negative Two"
        />
        <input
          onChange={(e) => {
            setNegativeThree(e.target.value);
          }}
          type="text"
          placeholder="Negative Three"
        />

        <button type="submit">Done</button>
      </form>
    </div>
  );
};

export default Negative;

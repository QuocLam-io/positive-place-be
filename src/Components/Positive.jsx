import axios from "axios";
import React, { useState, useEffect } from "react";

const Positive = () => {
  const [positiveOne, setPositiveOne] = useState("");
  const [positiveTwo, setPositiveTwo] = useState("");
  const [positiveThree, setPositiveThree] = useState("");

  const [positiveEntries, setPositiveEntries] = useState("");

  useEffect(() => {
    axios
      .get("/api/positive")
      .then((response) => {
        const pEntries = response.data;
        setPositiveEntries(pEntries);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(positiveEntries);


  const handlePositive = (e) => {
    e.preventDefault();
    axios.post("/api/positive", {
      todayOne: positiveOne,
      todayTwo: positiveTwo,
      todayThree: positiveThree,
    });
  }
    return (
      <div className="positive-parent">
        <div className="positive-header">
          <p>Date here</p>
          <p>Today I feel grateful for</p>
        </div>

        <form
          onSubmit={handlePositive}
          className="positive-input-form"
          action=""
        >
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

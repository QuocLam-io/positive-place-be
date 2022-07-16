import axios from "axios";
import React, { useState } from "react";
import moment from "moment";

const Positive = ({ positiveEntries, setPositiveEntries, months }) => {
  const [positiveOne, setPositiveOne] = useState("");
  const [positiveTwo, setPositiveTwo] = useState("");
  const [positiveThree, setPositiveThree] = useState("");

const weekday = moment().format("dddd");
  
  let today = new Date();
  let dd = today.getDate();
  let mm = months[today.getMonth()]
  let yyyy = today.getFullYear();

  if(dd<10) 
  {
      dd='0'+dd;
  } 
  if(mm<10) 
  {
      mm='0'+mm;
  } 

  today = `${weekday}, ${mm} ${dd}, ${yyyy}`;

  const handlePositive = (e) => {
    e.preventDefault();
    axios
      .post("/api/positive", {
        todayOne: positiveOne,
        todayTwo: positiveTwo,
        todayThree: positiveThree,
      })
      .then((res) => {
        setPositiveEntries([...positiveEntries, res.data]);
        console.log(res.data);
      });
  };
  return (
    <div className="positive-parent">
      <div className="positive-header">
        <p>{today}</p>
        <p>Today I feel grateful for</p>
      </div>

      <form onSubmit={handlePositive} className="positive-input-form" action="">
        <input
          onChange={(e) => {
            setPositiveOne(e.target.value);
          }}
          type="text"
          placeholder="Positive One"
        />
        <input
          onChange={(e) => {
            setPositiveTwo(e.target.value);
          }}
          type="text"
          placeholder="Positive Two"
        />
        <input
          onChange={(e) => {
            setPositiveThree(e.target.value);
          }}
          type="text"
          placeholder="Positive Three"
        />

        <button className="login-butt" type="submit">Done</button>
      </form>
    </div>
  );
};

export default Positive;

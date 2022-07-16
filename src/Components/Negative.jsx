import axios from "axios";
import React, { useState } from "react";
import moment from "moment";

const Negative = ({ negativeEntries, setNegativeEntries, months }) => {
  const [negativeOne, setNegativeOne] = useState("");
  const [negativeTwo, setNegativeTwo] = useState("");
  const [negativeThree, setNegativeThree] = useState("");

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

  const handleNegative = (e) => {
    e.preventDefault();
    axios
      .post("/api/negative", {
        todayOne: negativeOne,
        todayTwo: negativeTwo,
        todayThree: negativeThree,
      })
      .then((res) => {
        setNegativeEntries([...negativeEntries, res.data]);
        console.log(res.data);
      });
  };
  return (
    <div className="negative-parent">
      <div className="negative-header">
        <p>{today}</p>
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
          placeholder="2. You're a person who's not worth talking to"
        />
        <input
          onChange={(e) => {
            setNegativeThree(e.target.value);
          }}
          type="text"
          placeholder="3. I only talk to you for the prospect of sexual intercourse - Mehmet"
        />

        <button className="login-butt" type="submit">Done</button>
      </form>
    </div>
  );
};

export default Negative;

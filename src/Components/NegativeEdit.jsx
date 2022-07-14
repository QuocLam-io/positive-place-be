import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const NegativeEdit = () => {
  const [negativeEditOne, setNegativeEditOne] = useState("");
  const [negativeEditTwo, setNegativeEditTwo] = useState("");
  const [negativeEditThree, setNegativeEditThree] = useState("");
  const { id } = useParams();

/* ----------------------------- Update Handler ----------------------------- */

  const negativeEditHandler = (e) => {
    e.preventDefault();
    axios
      .put(`/api/negative/${id}`, {
        todayOne: negativeEditOne,
        todayTwo: negativeEditTwo,
        todayThree: negativeEditThree,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

/* ------------------------------- Use Effect ------------------------------- */
  useEffect(() => {
    // e.preventDefault();
    axios
      .get(`/api/negative/${id}`)
      .then((res) => {
        console.log(res);
        setNegativeEditOne(res.data.todayOne);
        setNegativeEditTwo(res.data.todayTwo);
        setNegativeEditThree(res.data.todayThree);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
/* -------------------------------------------------------------------------- */
  return (
    <div className="negative-edit-parent">
      <div className="negative-edit-header">
        <p>Date here</p>
        <p>Don't worry, we all make mistakes sometimes</p>
      </div>

      <form
        onSubmit={negativeEditHandler}
        className="negative-input-form"
        action=""
      >
        <input
          value={negativeEditOne}
          onChange={(e) => {
            setNegativeEditOne(e.target.value);
          }}
          type="text"
        />
        <input
          value={negativeEditTwo}
          onChange={(e) => {
            setNegativeEditTwo(e.target.value);
          }}
          type="text"
          placeholder="Negative Two"
        />
        <input
          value={negativeEditThree}
          onChange={(e) => {
            setNegativeEditThree(e.target.value);
          }}
          type="text"
          placeholder="Negative Three"
        />

        <button type="submit">Done</button>
      </form>
    </div>
  );
};

export default NegativeEdit;

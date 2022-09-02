import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "../axios";

const PositiveEdit = () => {
  const [positiveEditDate, setPositiveEditDate] = useState("");
  const [positiveEditOne, setPositiveEditOne] = useState("");
  const [positiveEditTwo, setPositiveEditTwo] = useState("");
  const [positiveEditThree, setPositiveEditThree] = useState("");
  const { id } = useParams();

  /* ----------------------------- Update Handler ----------------------------- */

  const positiveEditHandler = (e) => {
    e.preventDefault();
    axios
      .put(`https://positive-place-be.herokuapp.com/api/positive/${id}`, {
        todayOne: positiveEditOne,
        todayTwo: positiveEditTwo,
        todayThree: positiveEditThree,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  /* ------------------------------- Use Effect ------------------------------- */
  useEffect(() => {
    // e.preventDefault();
    axios
      .get(`https://positive-place-be.herokuapp.com/api/positive/${id}`)
      .then((res) => {
        console.log(res);
        setPositiveEditDate(res.data.day);
        setPositiveEditOne(res.data.todayOne);
        setPositiveEditTwo(res.data.todayTwo);
        setPositiveEditThree(res.data.todayThree);
      })
      .catch((err) => {
        console.log(err);
      });
    // eslint-disable-next-line
  }, []);
  /* -------------------------------------------------------------------------- */
  return (
    <div className="positive-edit-parent">
      <div className="positive-edit-header">
        <p>{positiveEditDate}</p>
      </div>

      <form
        onSubmit={positiveEditHandler}
        className="positive-edit-form"
        action=""
      >
        <input
          value={positiveEditOne}
          onChange={(e) => {
            setPositiveEditOne(e.target.value);
          }}
          type="text"
          placeholder="Positive One"
        />
        <input
          value={positiveEditTwo}
          onChange={(e) => {
            setPositiveEditTwo(e.target.value);
          }}
          type="text"
          placeholder="Positive Two"
        />
        <input
          value={positiveEditThree}
          onChange={(e) => {
            setPositiveEditThree(e.target.value);
          }}
          type="text"
          placeholder="Positive Three"
        />
        <div className="positive-edit-btns">
          <button className="login-btn" type="submit">
            Done
          </button>
        </div>
      </form>
    </div>
  );
};

export default PositiveEdit;

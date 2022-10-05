import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "../axios";

const NegativeEdit = () => {
  const [negativeEditDate, setNegativeEditDate] = useState("");
  const [negativeEditOne, setNegativeEditOne] = useState("");
  const [negativeEditTwo, setNegativeEditTwo] = useState("");
  const [negativeEditThree, setNegativeEditThree] = useState("");
  const { id } = useParams();

  /* ----------------------------- Update Handler ----------------------------- */

  const negativeEditHandler = (e) => {
    e.preventDefault();
    axios
      .put(`https://positive-place-be.up.railway.app/api/negative/${id}`, {
        todayOne: negativeEditOne,
        todayTwo: negativeEditTwo,
        todayThree: negativeEditThree,
      })
      .then((res) => {
        console.log("blub");
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
      .get(`https://positive-place-be.up.railway.app/api/negative/${id}`)
      .then((res) => {
        console.log(res);
        setNegativeEditDate(res.data.day);
        setNegativeEditOne(res.data.todayOne);
        setNegativeEditTwo(res.data.todayTwo);
        setNegativeEditThree(res.data.todayThree);
      })
      .catch((err) => {
        console.log(err);
      });
    // eslint-disable-next-line
  }, []);
  /* -------------------------------------------------------------------------- */
  return (
    <div className="negative-edit-parent">
      <div className="negative-edit-header">
        <p>{negativeEditDate}</p>
      </div>

      <form
        onSubmit={negativeEditHandler}
        className="negative-edit-form"
        action=""
      >
        <input
          value={negativeEditOne}
          onChange={(e) => {
            setNegativeEditOne(e.target.value);
          }}
          type="text"
          placeholder="Negative One"
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
        <div className="negative-edit-btns">
          <button className="login-btn" type="submit">
            Done
          </button>
        </div>
      </form>
    </div>
  );
};

export default NegativeEdit;

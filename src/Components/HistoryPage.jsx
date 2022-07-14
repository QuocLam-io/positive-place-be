import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const HistoryPage = ({ positiveEntries, negativeEntries }) => {

  // console.log(positiveEntries);
  // console.log(negativeEntries);

  //* ------------------- Delete Handler (Yonghair is a god) ------------------- */

  const deleteHandler = (e) => {
    axios.delete(`/api/positive/${e}`).then((res) => {
      console.log(res);
    });
  };

  /* -------------------------------- Entry Map ------------------------------- */
  const positiveMap = positiveEntries.map((entry, id) => {
    return (
      <div>
        <p>Date: {entry.day}</p>
        <p>{entry.todayOne}</p>
        <p>{entry.todayTwo}</p>
        <p>{entry.todayThree}</p>
        <Link to={`/positive-edit/${entry._id}`}>
          <button>Edit Button</button>
        </Link>

        <button onClick={() => deleteHandler(entry._id)}>Delete Button</button>
        <br />
      </div>
    );
  });
  /* -------------------------------------------------------------------------- */
  return <div>{positiveMap}</div>;
};

export default HistoryPage;

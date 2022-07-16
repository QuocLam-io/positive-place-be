import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const HistoryPage = ({
  positiveEntries,
  negativeEntries,
  setPositiveEntries,
  setNegativeEntries,
}) => {
  // ------------------- Positive Delete Handler (Yonghair is a god) ------------------- */

  const positiveDeleteHandler = (e) => {
    axios.delete(`/api/positive/${e}`).then((res) => {
      console.log(res);
      axios
        .get("/api/positive")
        .then((response) => {
          const pEntries = response.data;
          setPositiveEntries(pEntries);
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };
  // ------------------- Negative Delete Handler (Yonghair is a god) ------------------- */

  const negativeDeleteHandler = (e) => {
    axios.delete(`/api/negative/${e}`).then((res) => {
      console.log(res);
      axios
        .get("/api/negative")
        .then((response) => {
          const nEntries = response.data;
          setNegativeEntries(nEntries);
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };

  /* -------------------------------- Positive Map ------------------------------- */
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

        <button onClick={() => positiveDeleteHandler(entry._id)}>Delete Button</button>
        <br />
      </div>
    );
  });
  /* -------------------------------- Negative Map ------------------------------- */
  const negativeMap = negativeEntries.map((entry, id) => {
    return (
      <div>
        <p>Date: {entry.day}</p>
        <p>{entry.todayOne}</p>
        <p>{entry.todayTwo}</p>
        <p>{entry.todayThree}</p>
        <Link to={`/negative-edit/${entry._id}`}>
          <button>Edit Button</button>
        </Link>

        <button onClick={() => negativeDeleteHandler(entry._id)}>Delete Button</button>
        <br />
      </div>
    );
  });
  /* -------------------------------------------------------------------------- */
  return (
  <div>
    <div>{positiveMap}</div>
    <div>{negativeMap}</div>
  </div>
)};

export default HistoryPage;

import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const NegativeHistory = ({
  negativeEntries,
  setNegativeEntries,
}) => {
  // ------------------- Positive Delete Handler (Yonghair is a god) ------------------- */

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

        <button onClick={() => negativeDeleteHandler(entry._id)}>
          Delete Button
        </button>
        <br />
      </div>
    );
  });

  /* -------------------------------------------------------------------------- */
  return (
    <div>
      <p>Negative History</p>
      <div>{negativeMap}</div>
    </div>
  );
};

export default NegativeHistory;

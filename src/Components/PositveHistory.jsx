import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const PositiveHistory = ({ positiveEntries, setPositiveEntries }) => {

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
      // eslint-disable-next-line
  }, []);
  
  // ------------------- Positive Delete Handler (Yonghair is a god) ------------------- */

  const positiveDeleteHandler = (e) => {
    axios
      .delete(`/api/positive/${e}`)
      .then((res) => {
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

  /* -------------------------------- Positive Map ------------------------------- */
  const positiveMap = positiveEntries.map((entry, id) => {
    return (
      <div className="positive-history-card">
        <div className="positive-history-card-entries">
          <p className="history-date">{entry.day}</p>
          <p>1. {entry.todayOne}</p>
          <p>2. {entry.todayTwo}</p>
          <p>3. {entry.todayThree}</p>
        </div>

        <div className="positive-history-card-btns">
          <img
            className="positive-history-delete"
            src="imgs/rc-delete.png"
            alt=""
            onClick={() => positiveDeleteHandler(entry._id)}
          />
          <Link to={`/positive-edit/${entry._id}`}>
            <img src="imgs/rc-edit.png" alt="" />
          </Link>
        </div>
      </div>
    );
  });

  /* -------------------------------------------------------------------------- */
  return (
    <div className="positive-history-parent">
      <p
        className="positive-history-header
    "
      >
        My Entries
      </p>
      {positiveMap}
    </div>
  );
};

export default PositiveHistory;

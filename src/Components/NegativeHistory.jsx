import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const NegativeHistory = ({ negativeEntries, setNegativeEntries }) => {

  useEffect(() => {
    axios
      .get("/api/negative")
      .then((response) => {
        const nEntries = response.data;
        setNegativeEntries(nEntries);
      })
      .catch((error) => {
        console.log(error);
      });
      // eslint-disable-next-line
  }, []);
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

  /* -------------------------------- Negative Map ------------------------------- */
  const negativeMap = negativeEntries.map((entry, id) => {
    return (
      <div className="negative-history-card">
        <div className="negative-history-card-entries">
          <p className="history-date" >{entry.day}</p>
          <p>1. {entry.todayOne}</p>
          <p>2. {entry.todayTwo}</p>
          <p>3. {entry.todayThree}</p>
        </div>

        <div className="negative-history-card-btns">
          <img
            className="negative-history-delete"
            src="imgs/rc-delete.png"
            alt=""
            onClick={() => negativeDeleteHandler(entry._id)}
          />
          <Link to={`/negative-edit/${entry._id}`}>
            <img src="imgs/rc-edit.png" alt="" />
          </Link>
        </div>
      </div>
    );
  });

  /* -------------------------------------------------------------------------- */
  return (
    <div className="negative-history-parent">
      <p
        className="negative-history-header
    "
      >
        My Negative Entries
      </p>
      {negativeMap}
    </div>
  );
};

export default NegativeHistory;

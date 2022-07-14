import React, { useState, useEffect } from "react";
import axios from "axios";

const HistoryPage = () => {
  const [positiveEntries, setPositiveEntries] = useState("");

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
  }, []);

  console.log(positiveEntries);

  return (
  <div className="history-parent">History Page</div>);
};

export default HistoryPage;

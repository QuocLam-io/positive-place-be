//* ------------------------------ Dependencies ------------------------------ */
import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//* ------------------------------- Components ------------------------------- */
import Navbar from "./Components/Navbar";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Positive from "./Components/Positive";
import PositiveEdit from "./Components/PositiveEdit";
import Negative from "./Components/Negative";
import NegativeEdit from "./Components/NegativeEdit";
import RememberWhy from "./Components/RememberWhy";
import PositiveHistory from "./Components/PositveHistory";
import NegativeHistory from "./Components/NegativeHistory";

//* --------------------------------- States --------------------------------- */

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [positiveEntries, setPositiveEntries] = useState("");
  const [negativeEntries, setNegativeEntries] = useState("");
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  /* ----------------------- Positive Entries useEffect ----------------------- */

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

  /* ----------------------- Negative Entries useEffect ----------------------- */

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
  }, []);

  /* ---------------------------- Dark Mode Handler --------------------------- */

  const darkModeHandler = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    axios.get("/auth/me").then(({ data }) => {
      //{data} is destructed response data
      setIsLoggedIn(data.isLoggedIn);
    });
  }, []);

  // console.log(isLoggedIn, "logging in");

  //* -------------------------------------------------------------------------- */

  return (
    <div className={`App ${isDarkMode ? "dark-bg" : "" }`}>
      <div className="cubes">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <Navbar
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        darkModeHandler={darkModeHandler}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
      />
      <Routes>
        <Route
          path="/"
          element={
            isLoggedIn && isDarkMode ? (
              <Negative
                negativeEntries={negativeEntries}
                setNegativeEntries={setNegativeEntries}
                months={months}
                isDarkMode={isDarkMode}
              />
            ) : isLoggedIn && !isDarkMode ? (
              <Positive
                positiveEntries={positiveEntries}
                setPositiveEntries={setPositiveEntries}
                months={months}
              />
            ) : (
              <Login 
              setIsLoggedIn={setIsLoggedIn}
              isDarkMode={isDarkMode}
               />
            )
          }
        />

        <Route
          path="/signup"
          element={
            <Signup isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} isDarkMode={isDarkMode}/>
          }
        />

        <Route
          path="/positive-edit/:id"
          element={<PositiveEdit />}
          months={months}
        />
        <Route
          path="/negative-edit/:id"
          element={<NegativeEdit />}
          months={months}
        />
        <Route
          path="/history-page"
          element={
            isDarkMode ? (
              <NegativeHistory
                negativeEntries={negativeEntries}
                setNegativeEntries={setNegativeEntries}
                months={months}
              />
            ) : (
              <PositiveHistory
                positiveEntries={positiveEntries}
                setPositiveEntries={setPositiveEntries}
                months={months}
              />
            )
          }
        />

        <Route path="/remember-why" element={<RememberWhy />} />
      </Routes>
    </div>
  );
}

export default App;

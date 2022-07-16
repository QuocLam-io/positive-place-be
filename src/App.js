//* ------------------------------ Dependencies ------------------------------ */
import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
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
import HistoryPage from "./Components/HistoryPage";

//!Login/signup empty input
//!History Page Cards
//!Edit Toast
//!Toast every catch (Ask Leo about express error handler)
//Todo: JS Try/Catch BE .catch
//!Edit Forms Framer motion (Strethch Goal)

/* --------------------------------- States --------------------------------- */

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
    <div className="App">
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
              />
            ) : isLoggedIn && !isDarkMode ? (
              <Positive
                positiveEntries={positiveEntries}
                setPositiveEntries={setPositiveEntries}
                months={months}
              />
            ) : (
              <Login setIsLoggedIn={setIsLoggedIn} />
            )
          }
        />

        <Route
          path="/signup"
          element={
            <Signup isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
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
            <HistoryPage
              positiveEntries={positiveEntries}
              negativeEntries={negativeEntries}
              setPositiveEntries={setPositiveEntries}
              months={months}
            />
          }
        />

        <Route path="/remember-why" element={<RememberWhy />} />
      </Routes>
    </div>
  );
}

export default App;

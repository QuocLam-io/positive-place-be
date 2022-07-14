//* ------------------------------ Dependencies ------------------------------ */
import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import axios from "axios";

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

//!Copy Positive to Negatives
//!Edit Positive
//!Edit Negative
//!History Page Cards
//!Edit Toast
//!Toast every catch (Ask Leo about express error handler)
//Todo: JS Try/Catch BE .catch
//!Framer Motion
//!404 Page? (Stretch Goal)

/* --------------------------------- States --------------------------------- */

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [positiveEntries, setPositiveEntries] = useState("");
  const [negativeEntries, setNegativeEntries] = useState("");

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
              <Negative />
            ) : isLoggedIn && !isDarkMode ? (
              <Positive positiveEntries={positiveEntries} setPositiveEntries={setPositiveEntries}/>
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

        <Route path="/positive-edit/:id" element={<PositiveEdit />} />
        <Route path="/negative-edit/:id" element={<NegativeEdit />} />
        <Route
          path="/history-page"
          element={
            <HistoryPage
              positiveEntries={positiveEntries}
              negativeEntries={negativeEntries}
            />
          }
        />

        <Route path="/remember-why" element={<RememberWhy />} />
      </Routes>
    </div>
  );
}

export default App;

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

//!Edit Toast
//!Toast every catch (Ask Leo about express error handler)
//Todo: JS Try/Catch BE .catch
//!Framer Motion
//!404 Page? (Stretch Goal)

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const darkModeHandler = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    axios.get("/auth/me").then(({ data }) => {
      //{data} is destructed response data
      setIsLoggedIn(data.isLoggedIn);
    });
  }, []);

  console.log(isLoggedIn, "logging in");

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
              <Positive />
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

        <Route path="/positive-edit" element={<PositiveEdit/>} />
        <Route path="/negative-edit" element={<NegativeEdit/>} />
        <Route path="/history-page" element={<HistoryPage/>} />
        <Route path="/remember-why" element={<RememberWhy/>} />

      </Routes>
    </div>
  );
}

export default App;

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
import PositiveEdit from "./Components/PostiveEdit";
import Negative from "./Components/Negative";
import NegativeEdit from "./Components/NegativeEdit";
import RememberWhy from "./Components/RememberWhy";

//!Edit Toast
//!Toast every catch (Ask Leo about express error handler)
//Todo: JS Try/Catch BE .catch
//!Framer Motion
//!404 Page? (Stretch Goal)

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const notify = () => toast("Wow so easy!");

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
      //!Dark Mode Ternary
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
          element={<Signup 
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn} />}
        />

        <Route path="positive-edit" element={PositiveEdit} />
        <Route path="negative-edit" element={NegativeEdit} />
        <Route path="rememberWhy" element={RememberWhy} />
      </Routes>
      <div>
        <button onClick={notify}>Notify!</button>
        <ToastContainer />
      </div>
    </div>
  );
}

export default App;

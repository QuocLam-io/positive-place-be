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

//!Ask Richard about /me route.get
//!Authenticated to fetch info
//!Dark Light Logic
//!Signout button functionality (setIsLoggedIn)
//!Edit Toast
//!Ask Richard about uploading photos
//!Models User Schema Relationship
//!404 Handler
//!404 Page? (Stretch Goal)
//!Framer Motion

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

const darkModeHandler = ()=>{
  setIsDarkMode(!isDarkMode)
}

  const notify = () => toast("Wow so easy!");

  useEffect(() => {
    axios.get("/auth/me").then(({ data }) => {
      //{data} is destructed response data
      setIsLoggedIn(data.isLoggedIn);
    });
  }, [isLoggedIn]);

  console.log(isLoggedIn, "inside Jillian's warm Jewish fishbox.");

  return (
    <div className="App">
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} darkModeHandler={darkModeHandler} />
      <Routes>
        <Route
          path="/"
          element={
            isLoggedIn ? <Positive /> : <Login setIsLoggedIn={setIsLoggedIn} />
          }
        />

        <Route
          path="/signup"
          element={<Signup setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route path="negative" element={Negative} />
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

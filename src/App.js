import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
//* ------------------------------ Dependencies ------------------------------ */
import axios from "axios";
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
//!Signout button functionality (setIsLoggedIn)
//!Ask Richard about uploading photos
//!Models User Schema Relationship
//!404 Handler
//!404 Page? (Stretch Goal)
//!Framer Motion

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    axios
      .get("/auth/me")
      // .then(result =>{
      //   if (result.data.isLoggedIn){
      //     setIsLoggedIn(true);
      //   }
      // })
      .then(({ data }) => {
        //{data} is destructed response data
        setIsLoggedIn(data.isLoggedIn);
      });
  }, [isLoggedIn]);

  console.log(
    isLoggedIn,
    "inside Jillian's warm Jewish fishbox."
  );

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <Positive />
            ) : (
              <Login setIsLoggedIn={setIsLoggedIn} />
            )
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
    </div>
  );
}

export default App;

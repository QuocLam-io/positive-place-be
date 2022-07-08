import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
//*Dependencies
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import axios from "axios";

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
    "inside Jillian's warm Jewish fishbox. I'm a man with priorities ♥️"
  );

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/"       element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        //!Set conditional for Gratitude Page
        //!Models User Schema Relationship
        //!404 Handler
        //!Authenticated to fetch info
        //!404 Page? (Stretch Goal)
        //!Framer Motion
      </Routes>
    </div>
  );
}

export default App;

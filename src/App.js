import React, { useState, useEffect } from "react";
import "./App.css";
//*Dependencies
import Signup from "./Components/Signup";
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

  console.log(isLoggedIn, "inside Jillian's warm Jewish fishbox. I'm a man with priorities ♥️");

  return (
    <div className="App">
      <Navbar />
      <Signup />
    </div>
  );
}

export default App;

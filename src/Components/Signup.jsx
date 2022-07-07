import React, { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const signUpHandler = (e) => {
    e.preventDefault();
    // console.log(username, password);
    axios.post("/auth/signup", { username: username, password: password }).then((results)=>{
      console.log(results.data);
    });
  };


  
  return (
    <div className="signup-parent">
      <form onSubmit={signUpHandler}>
        <label htmlFor="">Username:</label>
        <input
          type="text"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <br />
        <label htmlFor="">Password:</label>
        <input
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <br />
        <button type="submit">Butt On</button>
      </form>
    </div>
  );
};

export default Signup;

import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Signup = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const signUpHandler = (e) => {
    e.preventDefault();
    // console.log(username, password);
    //* ------------------------------- Calls Axios ------------------------------ */
    axios
      .post("/auth/signup", { username: username, password: password })
      .then((results) => {
        setIsLoggedIn(true);
      })
      .catch((error) => {
        console.log(error);
        //! ----------------------------- Add React-Toast ---------------------------- */
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

        <Link to="/">
          <div>Login</div>
        </Link>
      </form>
    </div>
  );
};

export default Signup;

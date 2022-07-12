import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Login = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = (e) => {
    e.preventDefault();

    axios
      .post("/auth/login", { username: username, password: password })
      .then((results) => {
        setIsLoggedIn(true);
      })
      .catch(() => {
        //!Throw Toast
      });
  };

  return (
    <div className="login-parent" >
      <form action="" onSubmit={loginHandler}>
        <input
          onChange={(event) => {
            setUsername(event.target.value);
          }}
          type="text"
        />
        <input
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          type="password"
        />
        <button type="submit">Log Butt</button>
      </form>

      <Link to="/signup">
        <div>Signup</div>
      </Link>
    </div>
  );
};

export default Login;

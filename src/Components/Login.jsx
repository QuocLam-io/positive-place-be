import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      Login
      <Link to="/signup">
        <div>Signup</div>
      </Link>
    </div>
  );
};

export default Login;

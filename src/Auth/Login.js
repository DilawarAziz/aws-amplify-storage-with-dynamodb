import React from "react";
import loginImg from "../Assets/login.png";
import logo from "../Assets/logo.png";
function Login() {
  return (
    <div className="login-main">
      <div className="login-child-1">
        <img src={loginImg} alt="img" />
      </div>
      <div className="login-child-2">
        <img src={logo} alt="" />
      </div>
    </div>
  );
}

export default Login;

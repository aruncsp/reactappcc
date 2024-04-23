import React, { useState } from "react";
import loginModule from "./Login.module.css";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);

  function handleUserNameChange(event) {
    setUserName(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleFormSubmit() {
    if (userName === "admin" && password === "admin") {
      setLogin(true);
      alert("login success");
    }
  }

  return (
    <form className={loginModule.loginForm} onSubmit={handleFormSubmit}>
      <input
        type="text"
        placeholder="user name"
        className={loginModule.input}
        onChange={handleUserNameChange}
      />
      <input
        type="password"
        placeholder="password"
        className={loginModule.input}
        onChange={handlePasswordChange}
      />
      <button type="submit" className={loginModule.submitButton}>
        Submit
      </button>
    </form>
  );
}

export default Login;

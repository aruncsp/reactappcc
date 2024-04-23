import React, { useState } from "react";
import styles from "./Register.module.css";

function Register() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const [errors, setError] = useState({
    name: "",
    email: "",
    phone: "",
  });

  function handleNameChange(event) {
    setUser({ ...user, name: event.target.value.trim() });
  }

  function handleEmailChange(event) {
    setUser({ ...user, email: event.target.value.trim() });
  }

  function handlePhoneChange(event) {
    setUser({ ...user, phone: event.target.value.trim() });
  }

  function handlePasswordChange(event) {
    setUser({ ...user, password: event.target.value.trim() });
  }

  function register(event) {
    event.preventDefault();
    if (user.name === "") {
      setError({ ...errors, name: "Name is required" });
    }

    if (user.email === "") {
      setError((prevState) => ({
        ...prevState,
        email: "Email is required",
      }));
    }

    if (user.phone === "") {
      setError((prevState) => ({
        ...prevState,
        phone: "Phone is required",
      }));
    }

    if (errors.length > 0) {
      return false;
    }
    console.log(`User registered: ${user.name}`);
  }

  return (
    <form onSubmit={register} className={styles.form}>
      <div className={styles.inputGroup}>
        <input
          type="text"
          id="name"
          name="name"
          className={styles.input}
          onChange={handleNameChange}
          placeholder="Name"
          value={user.name}
        />
        {errors.name && <p className={styles.error}>{errors.name}</p>}
      </div>

      <div className={styles.inputGroup}>
        <input
          type="text"
          id="email"
          name="email"
          className={styles.input}
          onChange={handleEmailChange}
          placeholder="Email"
          value={user.email}
        />
        {errors.email && <p className={styles.error}>{errors.email}</p>}
      </div>

      <div className={styles.inputGroup}>
        <input
          type="text"
          id="phone"
          name="phone"
          className={styles.input}
          onChange={handlePhoneChange}
          placeholder="Phone"
          value={user.phone}
        />
        {errors.phone && <p className={styles.error}>{errors.phone}</p>}
      </div>

      <div className={styles.inputGroup}>
        <input
          type="password"
          id="password"
          name="password"
          className={styles.input}
          onChange={handlePasswordChange}
          placeholder="Password"
          value={user.password}
        />
      </div>

      <button type="submit">Register</button>
    </form>
  );
}

export default Register;

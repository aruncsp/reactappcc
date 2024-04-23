import React, { useState } from "react";
import styles from "./Register.module.css";

function RegisterRegEx() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [errors, setError] = useState({
    name: "",
    email: "",
    phone: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value.trim() });
    validateForm(name, value);
  }

  function validateForm(name, value) {
    let errorMessage = "";

    switch (name) {
      case "name":
        errorMessage =
          value.length < 3 ? "Name must be at least 3 characters long" : "";
        break;

      case "email":
        errorMessage = value.trim()
          ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
            ? ""
            : "Invalid email format."
          : "Email is required";
        break;

      case "phone":
        errorMessage = value.trim()
          ? /^\d{10}$/.test(value)
            ? ""
            : "Phone number must be a valid Indian phone number (10 digits)."
          : "Phone is required";
        break;
      default:
        break;
    }

    setError({ ...errors, [name]: errorMessage });
  }

  function register(event) {
    event.preventDefault();
    let newErrors = {};

    if (!user.name) {
      newErrors.name = "Name is required";
    }

    if (!user.email) {
      newErrors.email = "Email is required";
    }

    if (!user.phone) {
      newErrors.phone = "Phone is required";
    }

    if (Object.keys(newErrors).length > 0) {
      setError(newErrors);
    } else {
      alert(`${user.name}, ${user.email}, ${user.phone}`);
    }
  }

  return (
    <form onSubmit={register} className={styles.form}>
      <div className={styles.inputGroup}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className={styles.input}
          onChange={handleChange}
          value={user.name}
        />
        {errors.name && <span className={styles.error}>{errors.name}</span>}
      </div>
      <div className={styles.inputGroup}>
        <input
          type="text"
          name="email"
          placeholder="Email"
          className={styles.input}
          onChange={handleChange}
          value={user.email}
        />
        {errors.email && <span className={styles.error}>{errors.email}</span>}
      </div>
      <div className={styles.inputGroup}>
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          className={styles.input}
          onChange={handleChange}
          value={user.phone}
        />
        {errors.phone && <span className={styles.error}>{errors.phone}</span>}
      </div>
      <div className={styles.inputGroup}>
        <button type="submit" className={styles.button}>
          Register
        </button>
      </div>
    </form>
  );
}

export default RegisterRegEx;

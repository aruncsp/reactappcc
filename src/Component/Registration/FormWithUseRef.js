import React, { useRef, useState } from "react";
import styles from "./Register.module.css";
import axios from "axios";

function FormWithUseRef() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);

  const [errors, setError] = useState({
    name: "",
    email: "",
    phone: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
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
        errorMessage = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
          ? "Invalid email format"
          : "";
        break;
      case "phone":
        errorMessage = !/^\d{10}$/.test(value)
          ? "Invalid phone number format"
          : "";
        break;
      case "password":
        errorMessage = !/(?=.*\d)(?=.*[a-z]).{8,}/.test(value)
          ? "Password must include at least one number and be 8 characters long"
          : "";
        break;
      default:
        break;
    }
    setError((prevErrors) => ({ ...prevErrors, [name]: errorMessage }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const user = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
    };

    Object.keys(user).forEach((key) => {
      validateForm(key, user[key]);
    });

    if (Object.values(errors).every((error) => error === "")) {
      console.log("Form is valid");

      //   fetch("http://localhost:5001/api/users/", {
      //     Method: "POST",
      //     Headers: {
      //       Accept: "application.json",s
      //       "Content-Type": "application/json",
      //     },
      //     Body: JSON.stringify({
      //       name: user.name,
      //       email: user.email,
      //       phone: user.phone,
      //     }),
      //   })
      //     .then((response) => response.json())
      //     .then((d) => console.log(d));

      // fetch("http://localhost:5001/api/users/", {
      //   method: "post",
      //   headers: { "Content-Type": "application/json" },
      //   body: { user },
      // }).then((response) => console.log(response.json()));

      const response = await axios.post(
        `http://localhost:5001/api/users/`,
        user
      );
      const data = await response.data;
      console.log(data);
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.inputGroup}>
        <input
          type="text"
          id="name"
          placeholder="Name"
          ref={nameRef}
          className={styles.input}
          onChange={handleChange}
        />
        {errors.name && <span className={styles.error}>{errors.name}</span>}
      </div>
      <div className={styles.inputGroup}>
        <input
          type="text"
          name="email"
          placeholder="Email"
          ref={emailRef}
          className={styles.input}
          onChange={handleChange}
        />
        {errors.email && <span className={styles.error}>{errors.email}</span>}
      </div>
      <div className={styles.inputGroup}>
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          ref={phoneRef}
          className={styles.input}
          onChange={handleChange}
        />
        {errors.phone && <span className={styles.error}>{errors.phone}</span>}
      </div>
      <div className={styles.inputGroup}>
        <button type="submit" className={styles.submitButton}>
          Submit
        </button>
      </div>
    </form>
  );
}

export default FormWithUseRef;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Login.module.scss";
function Login() {
  const [error, setError] = useState();
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  function handleClick() {
    alert("You are already in Login page..");
  }
  function setUsername(e) {
    setEmail(e.target.value);
  }
  function setUserPassword(e) {
    setPassword(e.target.value);
  }
  function login(e) {
    e.preventDefault();
    // if inbuilt validator fails then do this
    if (email === "" && password === "")
      setError("Email and password cannot be empty");
    var formData = new FormData(e.target);
    var formObject = {};
    formData.forEach(function (value, key) {
      formObject[key] = value;
    });
    console.log(JSON.stringify(formObject));
  }
  return (
    <div className={styles["Loginpage"]}>
      <h1 onClick={handleClick}>Login Page</h1>
      {/* For displaying Error Message if login is not succesfull */}
      <p className={styles["error_message"]}>{error}</p>
      <form
        name="login_form"
        className={styles["form__section"]}
        onSubmit={login}
        encType="application/x-www-form-urlencoded"
      >
        <div className={styles["email__section"]}>
          <label htmlFor="Email">Email</label>
          <input
            type="email"
            name="email"
            onChange={setUsername}
            value={email}
            className={styles["input__field"]}
            required
          />
        </div>
        <div className={styles["password__section"]}>
          <label htmlFor="Password">Password </label>
          <input
            type="password"
            name="password"
            onChange={setUserPassword}
            value={password}
            className={styles["input__field"]}
            required
          />
        </div>
        <button type="submit" className={styles["Login__button"]}>
          Login
        </button>
        <button type="button" className={styles["SignUp__button"]}>
          <Link to="/register" className={styles["signup__link"]}>
            SignUp
          </Link>
        </button>
      </form>
    </div>
  );
}

export default Login;

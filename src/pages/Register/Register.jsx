import React, { useState } from "react";
import { Link } from "react-router-dom";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import styles from "./Register.module.scss";
function Register() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  function handleClick() {
    alert("You are already in Register page");
  }
  function setMeEmail(e) {
    setEmail(e.target.value);
  }
  function setMePassword(e) {
    setPassword(e.target.value);
  }
  function checkForConfirmPassword(e) {
    setConfirmPassword(e.target.value);
  }
  return (
    <div className={styles["Loginpage"]}>
      <h1 onClick={handleClick}>Register Page</h1>
      <button type="button" className={styles["Login__button"]}>
        <Link to="/" className={styles["signup__link"]}>
          Back to Login
        </Link>
      </button>
      <form method="post" className={styles["form__section"]}>
        <div className={styles["email__section"]}>
          <label htmlFor="Email">
            Email<sup>*</sup>{" "}
          </label>
          <input
            type="email"
            name="Email"
            className={styles["input__field"]}
            onChange={setMeEmail}
            value={email}
            required
          />
        </div>
        <div className={styles["password__section"]}>
          <label htmlFor="Password">
            Password<sup>*</sup>{" "}
          </label>
          <input
            type="password"
            name="Password"
            className={styles["input__field"]}
            onChange={setMePassword}
            value={password}
            required
          />
        </div>
        <div className={styles["password__section"]}>
          <label htmlFor="Password">
            {" "}
            Confirm-Password<sup>*</sup>{" "}
          </label>
          <input
            type="password"
            name="Password"
            className={styles["input__field"]}
            onChange={checkForConfirmPassword}
            value={confirmPassword}
            required
          />
        </div>
        <button type="submit" className={styles["SignUp__button"]}>
          SignUp
        </button>
        <button type="button" className={styles["Login__button"]}>
          <Link to="/" className={styles["signup__link"]}>
            <KeyboardBackspaceIcon />
          </Link>
        </button>
      </form>
    </div>
  );
}

export default Register;

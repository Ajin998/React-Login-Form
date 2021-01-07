import React, {useState,useEffect} from "react";
import { Link } from "react-router-dom";
import styles from "./Register.module.scss";
function Register() {
  const[email,setEmail] = useState();
  const[password,setPassword] = useState();
  const[confirmPassword, setConfirmPassword] = useState();
  function handleClick(){
    alert("You are already in Register page");
  }
  return (
    <div className={styles["Loginpage"]}>
      <h1 onClick={handleClick}>Register Page</h1>
      <form method="post" className={styles["form__section"]}>
        <div className={styles["email__section"]}>
          <label htmlFor="Email">
            Email<sup>*</sup>{" "}
          </label>
          <input
            type="email"
            name="Email"
            className={styles["input__field"]}
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
            required
          />
        </div>
        <button type="submit" className={styles["SignUp__button"]}>
          SignUp
        </button>
        <button type="button" className={styles["Login__button"]}>
          <Link to="/" className={styles["signup__link"]}>
            Login
          </Link>
        </button>
      </form>
    </div>
  );
}

export default Register;

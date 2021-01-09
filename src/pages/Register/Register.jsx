import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { signup } from "../../constants/endpoints";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import styles from "./Register.module.scss";
function Register() {
  const [error, setError] = useState();
  const [status, setStatus] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  let redirect;
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
  function signMeUp(e) {
    e.preventDefault();
    let formData = { email, password, confirmPassword };
    let formObject = JSON.stringify(formData);
    fetch(signup, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: formObject,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "Unsuccessfull") return setError(data.message);
        setStatus(data.status);
      })
      .catch((err) => {
        console.log("Kuch tho fatta:", err);
      });
  }
  return (
    <div className={styles["Loginpage"]}>
      <h1 onClick={handleClick}>Register Page</h1>
      <button type="button" className={styles["Login__button"]}>
        <Link to="/" className={styles["signup__link"]}>
          Back to Login
        </Link>
      </button>
      {/* <NotificationContainer /> */}
      {/* if error is true then display error */}
      {error && <p className={styles["error__msg"]}>{error}</p>}
      {status && (
        <>
        {redirect= window.confirm("Signed Up\nPress OK to Go in Login Page")}
          {/* <p className={styles["status__msg"]}>{status}</p> */}
          {redirect?<Redirect to="/" />: <Redirect to="/register" />}
        </>
      )}
      {/* {status && <p className={styles["status__msg"]}>{status}</p>} */}
      <form
        method="post"
        onSubmit={signMeUp}
        name="signup__form"
        encType="application/x-www-form-urlencoded"
        className={styles["form__section"]}
      >
        <div className={styles["email__section"]}>
          <label htmlFor="Email" name="email">
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
          <label htmlFor="Password" name="password">
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
          <label htmlFor="Password" name="confirmPassword">
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

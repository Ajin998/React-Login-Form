import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { login } from "../../constants/endpoints";
import Cookies from "js-cookie";
import Home from "../Dashboard/Home";
import styles from "./Login.module.scss";
function Login() {
  let token = Cookies.get("jwt");
  const [error, setError] = useState("");
  const [isLoggedIn, setLoggedIn] = useState(token ? true : false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleClick() {
    alert("You are already in Login page..");
  }
  function SetUsername(e) {
    setEmail(e.target.value);
  }
  function SetUserPassword(e) {
    setPassword(e.target.value);
  }

  function LoginUser(e) {
    e.preventDefault();
    // if inbuilt validator fails then do this
    if (email === "" && password === "") {
      setError("Email and password cannot be empty");
    }
    var formData = new FormData(e.target);
    var formObject = {};
    formData.forEach(function (value, key) {
      formObject[key] = value;
    });
    fetch(login, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formObject),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "unsuccessful") {
          setError(data.message);
          return;
        }
        if (data.data !== undefined) {
          Cookies.set("jwt", data.data[0]["jwt"]);
          setLoggedIn(true);
          return;
        }
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  }

  function Logout() {
    Cookies.remove("jwt");
    setLoggedIn(false);
    setEmail("");
    setPassword("");
    <Redirect to="/" />;
  }
  if (isLoggedIn) {
    return (
      <div className={styles["LoggedIn__page"]}>
        <div className={styles["side__panel"]}>
          <button className={styles["logout__button"]} onClick={Logout}>
            Logout
          </button>
        </div>
        <Home />
      </div>
    );
  }
  return (
    <div className={styles["Loginpage"]}>
      <h1 onClick={handleClick}>Login Page</h1>
      {/* For displaying Error Message if login is not succesfull */}
      {error && <p className={styles["error_message"]}>{error}</p>}
      <form
        name="login_form"
        className={styles["form__section"]}
        onSubmit={LoginUser}
        encType="application/x-www-form-urlencoded"
      >
        <div className={styles["email__section"]}>
          <label htmlFor="Email">Username</label>
          <input
            type="email"
            name="email"
            onChange={SetUsername}
            value={email}
            className={styles["input__field"]}
            placeholder="your email-id"
            required
          />
        </div>
        <div className={styles["password__section"]}>
          <label htmlFor="Password">Password </label>
          <input
            type="password"
            name="password"
            onChange={SetUserPassword}
            value={password}
            className={styles["input__field"]}
            placeholder="password"
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

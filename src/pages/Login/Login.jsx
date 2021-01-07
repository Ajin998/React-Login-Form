import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { endpoint, login } from "../../constants/endpoints";
import Cookies from "js-cookie";
import Home from "../Dashboard/Home";
import styles from "./Login.module.scss";
function Login() {
  const [error, setError] = useState();
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  // useEffect(() => {
  //   let conHeaders = new Headers();
  //   conHeaders.append("Authorization", "Bearer" + Cookies.get("jwt"));
  //   fetch(endpoint, {
  //     headers: conHeaders,
  //     mode: "cors",
  //   })
  //     .then((response) => {
  //       if (response.ok) return response.json();
  //       else <p>Error</p>;
  //       // else throw new Error("You need to Login.");
  //     })
  //     .then((data) => {
  //       setLoggedIn(true);
  //     });
  // }, []);
  function handleClick() {
    alert("You are already in Login page..");
  }
  function setUsername(e) {
    setEmail(e.target.value);
  }
  function setUserPassword(e) {
    setPassword(e.target.value);
  }
  function Login(e) {
    e.preventDefault();
    // if inbuilt validator fails then do this
    if (email === "" && password === "")
      setError("Email and password cannot be empty");
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
        if (data.status.status === "unsuccessfull") {
          return setError(data.status.message);
        }
        if (data.data === undefined) {
          alert(
            "Hmm..seems like you are new User \n You need to create a new account for this!!"
          );
        } else {
          Cookies.set("jwt", data.data[0]["jwt"]);
          setLoggedIn(true);
          console.log(isLoggedIn);
        }
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  }
  // function Logout(e) {
  //   Cookies.remove("jwt");
  //   setLoggedIn(false);
  // }
  if (isLoggedIn) {
    return (
      <Redirect
        to={{
          pathname: "/dashboard",
          state: { login_status:isLoggedIn },
        }}
      />
    );
  }
  return (
    <div className={styles["Loginpage"]}>
      <h1 onClick={handleClick}>Login Page</h1>
      {/* For displaying Error Message if login is not succesfull */}
      <p className={styles["error_message"]}>{error}</p>
      <form
        name="login_form"
        className={styles["form__section"]}
        onSubmit={Login}
        encType="application/x-www-form-urlencoded"
      >
        <div className={styles["email__section"]}>
          <label htmlFor="Email">Username</label>
          <input
            type="email"
            name="email"
            onChange={setUsername}
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
            onChange={setUserPassword}
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

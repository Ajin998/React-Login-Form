import React from "react";
import { Link } from "react-router-dom";
import styles from "./Login.module.scss";
function Login() {
  function handleClick(){
    alert("You are already in Login page..")
  }
  return (
    <div className={styles["Loginpage"]}>
      <h1 onClick={handleClick}>Login Page</h1>
      {/* For displaying Error Message if login is not succesfull */}
      <p className={styles["error_message"]}>{this.props.error}</p>
      <form
        method="post"
        name="login_form"
        className={styles["form__section"]}
        onSubmit={this.props.login}
        encType="application/x-www-form-urlencoded"
      >
        <div className={styles["email__section"]}>
          <label htmlFor="Email">Email</label>
          <input
            type="email"
            name="Email"
            onChange={this.props.setUserEmail}
            value={this.props.email}
            className={styles["input__field"]}
            required
          />
        </div>
        <div className={styles["password__section"]}>
          <label htmlFor="Password">Password </label>
          <input
            type="password"
            name="Password"
            onChange={this.props.setUserEmail}
            value={this.props.email}
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

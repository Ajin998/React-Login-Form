import React from "react";
import { Redirect } from "react-router-dom";

function Home(props) {
  if (props.location.state === undefined) return <Redirect to="/" />;
  if (props.location.state.login_status) {
    return (
      <div>
        <h1>This is home page after Login</h1>
        <button onClick={()=>props.logout}>Logout</button>
      </div>
    );
  } else {
    console.log(props.location.state.login_status);
    return <Redirect to="/" />;
  }
}

export default Home;

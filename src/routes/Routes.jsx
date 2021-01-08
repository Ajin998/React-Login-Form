import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
// import Home from "../pages/Dashboard/Home";
function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login}></Route>
        <Route path="/register" exact component={Register}></Route>
        {/* <Route path="/dashboard" exact component={Home}></Route> */}
      </Switch>
    </Router>
  );
}

export default Routes;

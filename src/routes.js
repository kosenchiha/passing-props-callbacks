import React from "react";
import { Switch, Route } from "react-router-dom";
import Parent from "./Parent";
import UseStatePractice from "./UseStatePractice";
export default () => (
  <Switch>
    <Route path="/" exact component={Parent} />
    <Route path="/UseStatePractice" component={UseStatePractice} />
  </Switch>
);

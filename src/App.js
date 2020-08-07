import React from "react";
import Parent from "./Parent";
import { BrowserRouter, Link } from "react-router-dom";
import Routes from "./routes";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Link to="/">Home</Link>
      <br />
      <Link to="/UseStatePractice">UseStatePractice</Link>
      <Routes />
    </BrowserRouter>
  );
}

export default App;

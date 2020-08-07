import React, { useState } from "react";

function UseStatePractice() {
  return (
    <div
      style={{
        background: "#A39CB0",
        width: "80%",
        margin: "5% auto",
        padding: "5%",
      }}
    >
      <div style={{ display: "flex" }}>
        <p>+</p>
        <p style={{ padding: "0 15px" }}>counter</p>
        <p>-</p>
      </div>
      <form>
        <input type="text" placeholder="first name" />
        <p>first name: XXX</p>
        <input type="text" placeholder="last name" />
        <p>second name: XXX</p>
        <input type="text" placeholder="your age" />
        <p>age: XXX</p>
        <br />
      </form>
    </div>
  );
}

export default UseStatePractice;

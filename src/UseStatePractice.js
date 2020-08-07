import React, { useState } from "react";

function UseStatePractice() {
  const [isGreeting, setIsGreeting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsGreeting(true);
  };
  return (
    <div
      style={{
        background: "#A39CB0",
        width: "80%",
        margin: "5% auto",
        padding: "5%",
      }}
    >
      {isGreeting && <h2>Hello! Your full name is XXX XXXX, You are X</h2>}

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="first name" />
        <p>first name: XXX</p>
        <input type="text" placeholder="last name" />
        <p>second name: XXX</p>
        <input type="text" placeholder="your age" />
        <p>age: XXX</p>
        <br />
        <button type="submit">Print greeting</button>
      </form>
    </div>
  );
}

export default UseStatePractice;

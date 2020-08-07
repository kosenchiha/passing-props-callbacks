import React, { useState } from "react";
import ChildDisplay from "./ChildDisplay";
import ChildForm from "./ChildForm";
const Parent = () => {
  const [count, setCount] = useState(0);
  const [listOfInputs, setListOfInputs] = useState([]);

  return (
    <div
      style={{
        background: "#FFC0CB",
        minHeight: "100vh",
        margin: "5% auto",
        padding: "5%",
      }}
    >
      <h1>Parent component</h1>
      <pre>Count: {JSON.stringify(count, null, 2)}</pre>
      <pre>listOfInputs: {JSON.stringify(listOfInputs, null, 2)}</pre>
      <div
        style={{
          display: "flex",
        }}
      >
        <ChildForm />
        <ChildDisplay />
      </div>
    </div>
  );
};

export default Parent;

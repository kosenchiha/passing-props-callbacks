import React from "react";

const ChildDisplay = (props) => {
  return (
    <div
      style={{
        background: "#B1E7A4",
        width: "80%",
        margin: "5% auto",
        padding: "5%",
      }}
    >
      <h2>Child Display</h2>
      <p>Data passed from Parent state as a prop</p>
      <p>Count is : XXX</p>
      <p>List of inputs</p>
      <ul>
        <li>XXX</li>
        <li>XXX</li>
      </ul>
      <pre>props: {JSON.stringify(props, null, 2)}</pre>
    </div>
  );
};

export default ChildDisplay;

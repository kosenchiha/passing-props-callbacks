import React, { useState } from "react";

const ChildForm = () => {
  const [formInput, setFormInput] = useState("");
  return (
    <div
      style={{
        background: "#A39CB0",
        width: "80%",
        margin: "5% auto",
        padding: "5%",
      }}
    >
      <h2>Child Form</h2>
      <button>Increase Count</button>
      <br />
      <button>Decrease Count</button>
      <form>
        <input
          type="text"
          value={formInput}
          onChange={(e) => setFormInput(e.target.value)}
        />
        <br />
        <button>Add Input to Paternt's State</button>
      </form>
      <pre>formInput:{JSON.stringify(formInput, null, 2)}</pre>
      {/* <pre>props: {JSON.stringify(props, null, 2)}</pre> */}
    </div>
  );
};

export default ChildForm;

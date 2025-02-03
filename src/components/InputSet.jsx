import React, { useState } from "react";

const InputSet = () => {
  const [first, setFirst] = useState();
  const [second, setSecond] = useState();
  const [result, setResult] = useState();
  
  const handleSubmit = () => {
    setResult(Number(first) + Number(second));
  };

  return (
    <div>
      <input
        type="number"
        placeholder="Enter your Number"
        value={first}
        onChange={(e) => setFirst(e.target.value)}
        style={{ border: "2px solid black" }}
      />
      <input
        type="number"
        placeholder="Enter your Number"
        onChange={(e) => setSecond(e.target.value)}
        style={{ border: "2px solid black" }}
      />
      <button
        style={{
          border: "2px solid black",
          marginLeft: "4px",
          background: "red",
        }}
        onClick={handleSubmit}
      >
        Submit
      </button>
      <h1>RESULT :{result}</h1>
    </div>
  );
};

export default InputSet;

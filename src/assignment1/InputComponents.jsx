import React, { useState } from "react";

const InputComponents = ({ onInputChange }) => {
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
    margin: "20px",
    padding: "20px",
    border: "2px solid #4caf50",
    borderRadius: "10px",
    width: "300px",
    backgroundColor: "#f9f9f9",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "16px",
  };

  const handleFirstChange = (e) => {
    const value = e.target.value;
    setFirst(value);
    onInputChange("first", value); // Notify parent
  };

  const handleSecondChange = (e) => {
    const value = e.target.value;
    setSecond(value);
    onInputChange("second", value); // Notify parent
  };

  return (
    <div style={containerStyle}>
      <input
        type="number"
        placeholder="Enter first number"
        style={inputStyle}
        value={first}
        onChange={handleFirstChange}
      />
      <input
        type="number"
        placeholder="Enter second number"
        style={inputStyle}
        value={second}
        onChange={handleSecondChange}
      />
    </div>
  );
};

export default InputComponents;

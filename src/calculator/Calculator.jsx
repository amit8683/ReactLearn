import React, { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState("");

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "50px",
    fontFamily: "Arial, sans-serif",
  };

  const inputStyle = {
    width: "250px",
    height: "40px",
    fontSize: "18px",
    textAlign: "right",
    marginBottom: "20px",
    padding: "5px",
    borderRadius: "5px",
    border: "2px solid black",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
  };

  const rowStyle = {
    display: "flex",
    justifyContent: "center",
    marginBottom: "10px",
  };

  const buttonStyle = {
    width: "60px",
    height: "40px",
    fontSize: "18px",
    margin: "5px",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#f0f0f0",
    cursor: "pointer",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
    transition: "background-color 0.2s ease, transform 0.2s ease",
  };

  const specialButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#ff8585",
    color: "white",
  };

  const operatorButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#ffa500",
    color: "white",
  };

  return (
    <div style={containerStyle}>
      <div>
        <input type="text" style={inputStyle} value={input} readOnly />
      </div>
      <div style={rowStyle}>
        <button style={specialButtonStyle} onClick={() => setInput(input.slice(0, -1))}>
          AC
        </button>
        <button style={specialButtonStyle} onClick={() => setInput("")}>
          DE
        </button>
        <button style={buttonStyle} onClick={() => setInput(input + "0")}>
          0
        </button>
        <button style={operatorButtonStyle} onClick={() => setInput(eval(input))}>
          =
        </button>
      </div>
      <div style={rowStyle}>
        <button style={buttonStyle} onClick={() => setInput(input + "7")}>
          7
        </button>
        <button style={buttonStyle} onClick={() => setInput(input + "8")}>
          8
        </button>
        <button style={buttonStyle} onClick={() => setInput(input + "9")}>
          9
        </button>
        <button style={operatorButtonStyle} onClick={() => setInput(input + "*")}>
          *
        </button>
      </div>
      <div style={rowStyle}>
        <button style={buttonStyle} onClick={() => setInput(input + "4")}>
          4
        </button>
        <button style={buttonStyle} onClick={() => setInput(input + "5")}>
          5
        </button>
        <button style={buttonStyle} onClick={() => setInput(input + "6")}>
          6
        </button>
        <button style={operatorButtonStyle} onClick={() => setInput(input + "+")}>
          +
        </button>
      </div>
      <div style={rowStyle}>
        <button style={buttonStyle} onClick={() => setInput(input + "1")}>
          1
        </button>
        <button style={buttonStyle} onClick={() => setInput(input + "2")}>
          2
        </button>
        <button style={buttonStyle} onClick={() => setInput(input + "3")}>
          3
        </button>
        <button style={operatorButtonStyle} onClick={() => setInput(input + "-")}>
          -
        </button>
      </div>
    </div>
  );
};

export default Calculator;

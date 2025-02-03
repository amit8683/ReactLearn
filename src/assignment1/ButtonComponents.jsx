import React from "react";

const ButtonComponents = ({ onSubmit }) => {
  return (
    <button
      style={{ background: "green", padding: "10px", color: "white", border: "none", borderRadius: "5px" }}
      onClick={onSubmit}
    >
      Submit
    </button>
  );
};

export default ButtonComponents;

import React, { useState } from "react";

const ControlledComponents = () => {
  const [inputValue, setInputValue] = useState(""); // Controlled state

  return (
    <div className="flex flex-col items-center gap-4 mt-10">
      <h1 className="text-2xl font-bold text-gray-800">Controlled Components</h1>
      <input
        type="text"
        value={inputValue} // Controlled by state
        onChange={(e) => setInputValue(e.target.value)} // Updates state on change
        className="w-64 px-3 py-2 border-2 border-black rounded-md outline-none focus:border-blue-500"
      />
      <p className="text-gray-700">You typed: {inputValue}</p>
    </div>
  );
};

export default ControlledComponents;

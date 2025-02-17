import React, { useRef } from "react";

const UncontrolledComponents = () => {
  const inputRef = useRef(null); // Creating a reference for the input

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Entered Value: ${inputRef.current.value}`); // Access input value using ref
  };

  return (
    <div className="flex flex-col items-center gap-4 mt-10">
      <h1 className="text-2xl font-bold text-gray-800">Uncontrolled Components</h1>
      <form onSubmit={handleSubmit} className="flex flex-col items-center gap-2">
        <input
          type="text"
          ref={inputRef} // Uncontrolled input
          className="w-64 px-3 py-2 border-2 border-black rounded-md outline-none focus:border-blue-500"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UncontrolledComponents;

import React, { useRef } from "react";

const UseRefHook = () => {
  const inputRef = useRef(null);

  const handleInput = () => {
   
    inputRef.current.value="1000"
    inputRef.current.focus();
    inputRef.current.style.color="red"
  };

  return (
    <div className="flex flex-col items-center gap-4 mt-10">
      <h1 className="text-2xl font-bold text-gray-800">Example</h1>
      <input
        type="text"
        ref={inputRef}
         defaultValue="100000"
        className="w-64 px-3 py-2 border-2 border-black rounded-md outline-none focus:border-blue-500"
      />
      <button
        onClick={handleInput}
        className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300"
      >
        Change Input
      </button>
    </div>
  );
};

export default UseRefHook;

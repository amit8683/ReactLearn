import React from "react";

const ResultComponents = ({ sum }) => {
  return (
    <div>
      <h1>Result: {sum !== null ? sum : "No result yet"}</h1>
    </div>
  );
};

export default ResultComponents;

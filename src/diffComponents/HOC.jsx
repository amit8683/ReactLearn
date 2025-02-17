import React from "react";

// Higher-Order Component (HOC)
const withMessage = (WrappedComponent) => {
  return () => (
    <div>
      <h2>Hello from HOC!</h2>
      <WrappedComponent />
    </div>
  );
};

// Simple Component
const SimpleComponent = () => {
  return <p>I am a simple component</p>;
};

// Enhanced Component using HOC
const EnhancedComponent = withMessage(SimpleComponent);

const HOC = () => {
  return (
    <div>
      <h1>Higher-Order Component</h1>
      <EnhancedComponent />
    </div>
  );
};

export default HOC;

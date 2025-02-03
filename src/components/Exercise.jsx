import React from "react";

const Card = (props) => {
  const { children } = props;
  return (
        <div>
            {children}
         </div>
    
);
};
const Exercise = () => {
  return (
    <div>
      <Card name="amit">
        <h1>AMIT</h1>
      </Card>
    </div>
  );
};

export default Exercise;

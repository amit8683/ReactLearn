import React, { useState, useEffect } from "react";

const Practice1 = () => {
  const [count, setCount] = useState(0);
 const [count2, setCount2] = useState(0);
  
const Inc = () => {
      setCount(count + 1);
    };

  const Inc2=() => {
    setCount2(count2 + 1);
  }
useEffect(()=>{
 // setCount2(count2 + 1);
},[count2])
  return (
    <div>
      <h1>Count: {count}</h1>
      <button style={{border:"2px solid black",backgroundColor:"yellow"}} >Increment Count</button>
      <h2>Count2: {count2}</h2>
      <button style={{border:"2px solid black",backgroundColor:"red"}} onClick={Inc2}>WithoutInc</button>
      
    </div>
  );
};

export default Practice1;

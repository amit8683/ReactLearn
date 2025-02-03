import React,{useState,useEffect} from 'react'

const Practice = () => {
    const [count, setCount] = useState(0);
    function message(){
        console.log("Call me once");
    }
    
    useEffect(()=>{
      message();
},[count])
  return (
    <div>
      
      <h1>Count: {count}</h1>
      <button style={{border:"2px solid black",backgroundColor:"yellow"}} onClick={()=>setCount(count+1)} >Increment Count</button>
    </div>
  )
}

export default Practice

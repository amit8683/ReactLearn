import React,{useState} from 'react'
import Child from "./Child"
const Parent = () => {
const[result,setResult]=useState([]);
    function Parentalert(data){
     setResult(data);
    }
  return (
    <div>
      <h1>Parent</h1>
      <Child data={Parentalert} />
      {result.map((val, index) =>{
        return(
            <div key={index}>
              <h1>{val.name}</h1>
              <h1>{val.value}</h1>
            </div>
          )
      } )}
    </div>
  )
}

export default Parent

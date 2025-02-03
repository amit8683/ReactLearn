import React,{useState} from 'react'

const MultipleCondition = () => {
    const [count,setCount]=useState(0);
  return (
    <div>
      {
        count===0?<h1>Count Mera 0</h1>:
        count===1?<h1>Count Mera 1</h1>:
        count===2?<h1>Count Mera 2</h1>:
        count===3?<h1>Count Mera 3</h1>:
        <h1>Count Reset kr</h1>
      }
     <button onClick={()=>setCount(count+1)} style={{background:"yellow",border:"2px solid black"}}>
        Counter
       </button>
    </div>
  )
}

export default MultipleCondition

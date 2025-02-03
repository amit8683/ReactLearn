import React,{useState} from 'react'

const Condition = () => {
const [display,setDisplay]=useState(false);
  return (
    <div>
    
      {
        display?<h1>SHow</h1>:<></>
      }
      <button onClick={()=>setDisplay(!display)} style={{background:"yellow",border:"2px solid black"}}>
        {
            !display?<p>Show My Content</p>:<p>HIDE MY CONTENT</p>
        }
    </button>
    </div>
  )
}

export default Condition

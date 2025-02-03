import React from 'react'

const Child = (props) => {
  return (
    <div>
      <h1>Child</h1>
      
      <button style={{border:"2px solid black",backgroundColor:"red"}} 
      onClick={()=>props.data("mera child se data aaya hai")}>Click me</button>
    </div>
  )
}

export default Child

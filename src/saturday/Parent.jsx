import React from 'react'
import Child from './Child'
const Parent = () => {
    let arr=[1,2,3,4,5,6,7,8,9]
       
  return (
    <div>
      <h1>Parent</h1>
      {
        arr.map((val,index)=>(
            <h1 key={index}>{val}</h1>
        ))
      }
      <Child obj={{umar:29}} />
    </div>
  )
}

export default Parent
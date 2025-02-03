import React from 'react'

const Child = ({data}) => {
    let arr=[{name: 'amit', value:1}, {name: 'aman', value:2}]
  return (
    <div>
      <button onClick={()=>data(arr)}>Click me</button>
    </div>
  )
}

export default Child

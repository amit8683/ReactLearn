import React,{useState} from 'react'

const Test6 = () => {
    const [user,setUser]=useState("name");
  return (
    <div>
        <h1>{user}</h1>
      <input type="text" value={user} onChange={(event)=>setUser(event.target.value)}  style={{ border: "2px solid black" }} />
    </div>
  )
}

export default Test6

import React from 'react'
import "./s1.css"
import style from "./s1.module.css";
const Style = () => { 
  return (
    <div>
      <h1 className='primary'>MY First Style Components</h1>
      <h1 style={{color:"red",backgroundColor:"yellow"}}>MY Second Style components</h1>
      <h1 className={style.success}>My Third Style Components</h1>
    </div>
  )
}

export default Style

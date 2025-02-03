import React,{useState} from 'react';
const Test5=(props) => {
    const [name,setName]=useState("aman")
    const handleClick =() =>{
        setName("amit")
        console.log(name)
    }
    return (
        <>
        <div>{name}</div>
        <div>{props.user}</div>
        <div>{props.obj.contact}</div>
        <button onClick={handleClick} style={{background:"red"}}>Button</button>
        </>
    )
}

export default Test5;
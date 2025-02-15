import React,{useState} from 'react'

const UpdatingObject = () => {
const [data,setData]= useState({
    name:"amit",
    address:{
        city:"Sirsa",
        country:"India",
    }
})
const handleSubmit =(val) => {
    // data.name=val;
    // console.log(data)

    setData({...data,name:val});
}
const handleCity =(val) => {
  
    setData({...data,address:{...data.address,city:val}});
    
}
  return (
    <div>
        <input type="text" style={{border: "1px solid black"}} onChange={(e)=>handleSubmit(e.target.value)} />
        <input type="text" style={{border: "1px solid black"}} onChange={(e)=>handleCity(e.target.value)} />
        <h1>Name:{data.name}</h1>
        <h1>City:{data.address.city}</h1>
        <h1>Country:{data.address.country}</h1>
    </div>
  )
}

export default UpdatingObject

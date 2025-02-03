import React,{useState} from 'react'

const UpdatingArrya = () => {
const [data,setData] = useState(["Aman","Abhimanu","Himanshu","Sheetal"]);
const SubmitHandle= (name) => {
data[data.length-1]=name;
setData([...data]);


// const updatedData = [...data];
// updatedData[updatedData.length - 1] = name;
// setData(updatedData);
}
  return (
    <div>
        <input type="text" style={{border:"2px solid black"}} onChange={(e)=>SubmitHandle(e.target.value)} />
        {
            data.map((val,index)=>(
                <h1 key={index}>{val}</h1>
            ))
        }
      
    </div>
  )
}

export default UpdatingArrya

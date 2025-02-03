import React,{useState} from 'react'

const UpdatingArrayObject = () => {
    const [data,setData] = useState(
        [
        { name: "Amit", age: "24" },
        { name: "Priya", age: "22" },
        { name: "Rohit", age: "27" },
        { name: "Sneha", age: "25" },
        { name: "Vikram", age: "30" },
        { name: "Anjali", age: "23" },
        { name: "Karan", age: "28" },
        { name: "Pooja", age: "26" },
        { name: "Rahul", age: "29" },
        { name: "Neha", age: "21" }
      ]
      )
      const handelSubmit=(ages)=>{
        data[data.length-1].age=ages;
        setData([...data]);

        
    // const updatedData = data.map((item, index) =>
    //     index === data.length - 1
    //       ? { ...item, age: ages } 
    //       : item
    //   );
  
    //   setData(updatedData); 
      }
  return (
    <div>
      <h1>Updating One</h1>
      <input type="text" style={{border:"2px solid black"}} onChange={(e)=>handelSubmit(e.target.value)} />
      {
        data.map((value, index) =>(
            <div key={index}>
                 <h1 >{value.name}{value.age}</h1>
                
            </div>
           
        ))
      }
    </div>
  )
}

export default UpdatingArrayObject

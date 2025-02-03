import React from 'react'
import Child from './Child';
const Parent = () => {
    function message(msg){
        alert(msg);
    }
  return (
    <div>
        
      <Child   data={message} />
    </div>
  )
}

export default Parent

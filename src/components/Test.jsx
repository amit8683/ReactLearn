import React, { useState } from "react";

const Test = (props) => {
  const {children} = props;

  return (
    
    <div>
        <div style={{background:"yellow",border:"5px solid green",width:"300px", marginLeft:'400px',marginBottom:"40px",textAlign:"center"}}>
            {children}
        </div>

    </div>
  );
};

export default Test;

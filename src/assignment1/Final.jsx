import React,{useState} from 'react'
import InputComponents from "./InputComponents";
import ButtonComponents from "./ButtonComponents";
import ResultComponents from "./ResultComponents";
const Final = () => {
    const [inputData, setInputData] = useState({ first: "", second: "" });
      const [sum, setSum] = useState(null);
    
      // Update input data from InputComponents
      const handleInputChange = (field, value) => {
        setInputData({ ...inputData, [field]: value });
      };
    
    
      // Calculate sum on button click
      const handleButtonClick = () => {
        const result = Number(inputData.first) + Number(inputData.second);
        setSum(result);
      };
  return (
    <div>
         <h1>Sum Calculator</h1>
      <InputComponents onInputChange={handleInputChange} />
      <ButtonComponents onSubmit={handleButtonClick} />
      <ResultComponents sum={sum} />
      
    </div>
  )
}

export default Final

import React,{useState} from "react";

function Minsalary(){
    const [inputValue, setInputValue] = useState('');
    const [inputError, setInputError] = useState(null);
  
    function handleInputChange(event) {
      const value = event.target.value;
      setInputValue(value);
  
    //   if (value.length>1) {
    //     setInputError('Input must be at least 5 characters');
    //   } else {
    //     setInputError(null);
    //   }
    }
  
    function handleSubmit(event) {
      event.preventDefault();
      if (inputValue.length <= 5) {
        // submit form
    //   } else {
    //     setInputError('Input must be at least 5 characters');
    //   }
    }
}
    return (
      <form className="Min" onSubmit={handleSubmit}>
        <label>
          Min salary:
          </label>
          <input type="text" value={inputValue} onChange={handleInputChange} />
        
        {inputError && <div style={{ color: 'red' }}>{inputError}</div>}
    
      </form>
    );
}

export default Minsalary;


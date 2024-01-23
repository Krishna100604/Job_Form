import React from "react";
import { useState } from "react";

function Currency(){
    const[selectedOption,setSelectedOption]=useState("option1");

    function handleDropdownChange(event) {
		setSelectedOption(event.target.value);
	};
    return(
        <div className="currency">
		<label className="box2">
			Currency:
        </label>
				<select  value={selectedOption} onChange={handleDropdownChange}>
				<option  value="option1">Us dollar</option>
				<option  value="option2"> rupees</option>
				<option  value="option3">Pound</option>
			</select>
	
		{/* <p>Selected option: {selectedOption}</p> */}
	</div>
    );
}
export default Currency;
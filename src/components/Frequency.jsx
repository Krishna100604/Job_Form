import React from "react";
import { useState } from "react";

function Frequency(){
    const[selectedOption,setSelectedOption]=useState("option1");

    function handleDropdownChange(event) {
		setSelectedOption(event.target.value);
	};
    return(
        <div className="frequency">
		<label>
			Select Frequency:
				<select  value={selectedOption} onChange={handleDropdownChange}>
				<option  value="option1">Monthly</option>
				<option  value="option2">Yearly</option>
				<option  value="option3">Daily</option>
                <option  value="option4">Hourly</option>
			</select>
		</label>
		{/* <p>Selected option: {selectedOption}</p> */}
	</div>
    );
}
export default Frequency;
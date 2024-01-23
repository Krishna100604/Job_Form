import React from "react";
import { useState } from "react";

function Company(){
    const[selectedOption,setSelectedOption]=useState("option1");

    function handleDropdownChange(event) {
		setSelectedOption(event.target.value);
	};
    return(
        <div className="company">
		<label className="box4">
			Company Name:
				<select  value={selectedOption} onChange={handleDropdownChange}>
				<option  value="option1">Skill genic</option>
				<option  value="option2">Google</option>
				<option  value="option3">Oracle</option>
			</select>
		</label>
		{/* <p>Selected option: {selectedOption}</p> */}
	</div>
    );
}
export default Company;
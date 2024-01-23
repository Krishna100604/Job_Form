import React from "react";
import { useState } from "react";

function Location(){
    const[selectedOption,setSelectedOption]=useState("option1");

    function handleDropdownChange(event) {
		setSelectedOption(event.target.value);
	};
    return(
        <div className="location">
		<label className="box5">
			Location:
        </label>
			<select  value={selectedOption} onChange={handleDropdownChange}>
				<option  value="option1">Mumbai</option>
				<option  value="option2">Hydrabad</option>
				<option  value="option3">Bangalore</option>
			</select>
	
		{/* <p>Selected option: {selectedOption}</p> */}
	</div>
    );
}
export default Location;
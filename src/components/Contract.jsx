import React ,{useState} from "react";

function Contract(){
    const[selectedOption,setSelectedOption]=useState("option1");

    function handleDropdownChange(event) {
		setSelectedOption(event.target.value);
	};
    return(
        <div className="contract">
		<label className="box3">
			Contract Details:
				<select  value={selectedOption} onChange={handleDropdownChange}>
				<option  value="option1">Full-time</option>
				<option  value="option2">Part-time</option>
				<option  value="option3">Internship</option>
			</select>
		</label>
		{/* <p>Selected option: {selectedOption}</p> */}
	</div>
    );
}

export default  Contract;
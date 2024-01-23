import React,{useState} from "react";


function Round1(){

    const[selectedOption,setSelectedOption]=useState("option1");

    function handleDropdownChange(event) {
		setSelectedOption(event.target.value);
	};
    return(
        <div className="round1">
         
		<label  

           className="box">
                <div className="text"> Round1:</div>
				<select  value={selectedOption} onChange={handleDropdownChange}>
				<option  value="option1">Skill Assessment</option>
				<option  value="option2">Technical Interview</option>
				<option  value="option3">AI based video</option>
                <option  value="option4">Off line-Online Interview</option>
			</select>
		</label>
		{/* <p>Selected option: {selectedOption}</p> */}
	</div>

    );
}

export default Round1;
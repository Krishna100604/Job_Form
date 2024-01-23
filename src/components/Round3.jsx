import React,{useState} from "react";


function Round3(){

    const[selectedOption,setSelectedOption]=useState("option1");

    function handleDropdownChange(event) {
		setSelectedOption(event.target.value);
	};
    return(
        <div className="round3">
         
		<label  

           className="box2">
                <div className="text2"> Round3:</div>
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

export default Round3;
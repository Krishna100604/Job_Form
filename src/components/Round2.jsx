import React,{useState} from "react";


function Round2(){

    const[selectedOption,setSelectedOption]=useState("option1");

    function handleDropdownChange(event) {
		setSelectedOption(event.target.value);
	};
    return(
        <div className="round2">
         
		<label  

           className="box1">
                <div className="text1"> Round2:</div>
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

export default Round2;
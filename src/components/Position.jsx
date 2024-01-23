// import React,{useState} from "react";
// import axios from "axios";


// function Position(){

//     const[selectedOption,setSelectedOption]=useState("option1");

//     function handleDropdownChange(event) {
// 	const newSelectedOption=(event.target.value);
//         setSelectedOption(newSelectedOption);

// 		// Send a POST request to your backend
// 		axios.post("/Page2/position", { position: selectedOption })
// 		.then(response => {
// 		  console.log("Data sent successfully:", response.data);
// 		  // Handle the response from the server if needed
// 		})
// 		.catch(error => {
// 		  console.error("Error sending data:", error);
// 		  // Handle errors if necessary
// 		});
// 	}

	
//     return(
//         <div className="position">
// 		<label className="box">
// 			Position Name:
// 				<select  value={selectedOption} onChange={handleDropdownChange}>
// 				<option  value="option1">software engineer</option>
// 				<option  value="option2">Backend Engineer</option>
// 				<option  value="option3">Prompt engineer</option>
// 			</select>
// 		</label>
// 		{/* <p>Selected option: {selectedOption}</p> */}
// 	</div>

//     );
// 	}

// export default Position;


// Position.js
import React, { useState } from "react";
import axios from "axios";

function Position() {
const positions=["Software Engineer", "Backend Engineer", "Prompt Engineer"];
  const [selectedOption, setSelectedOption] = useState(0);
  function handleDropdownChange(event) {
    const newSelectedOption = event.target.value;
	// console.log(newSelectedOption);
	const newSelectedOptionVal=positions[newSelectedOption]
	// console.log(newSelectedOptionVal);
    setSelectedOption(newSelectedOption);
	// console.log("Hello",newSelectedOptionVal);
	
    // Send a POST request to your backend
    axios.post("http://localhost:5000/savePosition", { position:newSelectedOptionVal })
      .then(response => {
        console.log("Data sent successfully:", response.data);
        // Handle the response from the server if needed
      })
      .catch(error => {
        console.error("Error sending data:", error);
        // Handle errors if necessary
      });
  }

  return (
    <div className="position">
      <label className="box">
        Position Name:
        <select value={selectedOption} onChange={handleDropdownChange}>
          <option value="0">Software Engineer</option>
          <option value="1">Backend Engineer</option>
          <option value="2">Prompt Engineer</option>
        </select>
      </label>
      {/* <p>Selected option: {selectedOption}</p> */}
    </div>
  );
}

export default Position;

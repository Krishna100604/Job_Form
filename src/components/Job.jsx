import React, { useState } from "react";
import axios from 'axios';

function Job() {
	const job=["Default job pipeline"];
  const [selectedOption, setSelectedOption] = useState('0');

  function handleDropdownChange(event) {
    const newSelectedOption = event.target.value;
	// console.log(newSelectedOption);
	const newSelectedOptionVal=job[newSelectedOption]
	// console.log(newSelectedOptionVal);
    setSelectedOption(newSelectedOption);
	// console.log("Hello",newSelectedOptionVal);

    // Send a POST request to save job data
    axios.post('http://localhost:5000/job', { jobPipeline: newSelectedOptionVal })
      .then(response => {
        console.log('Job data sent successfully:', response.data);
        // Handle the response from the server if needed
      })
      .catch(error => {
        console.error('Error sending job data:', error);
        // Handle errors if necessary
      });
  }

  return (
    <div className="job">
      <label className="Box_2">
        Job pipeline:
        <select value={selectedOption} onChange={handleDropdownChange}>
          <option value="0">Default job pipeline</option>
          {/* Add other options as needed */}
        </select>
      </label>
      {/* <p>Selected option: {selectedOption}</p> */}
    </div>
  );
}

export default Job;

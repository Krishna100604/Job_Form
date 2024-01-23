import React from "react";
import Form from "../components/Form";
import { useNavigate } from "react-router-dom";


function  Page2(){
   const Navigate=useNavigate();

   function handleClick(){
      Navigate("/page3");
   }

   return(
      <div className="page2">
        <div className="content2">Create A Job
       
        </div>
        
          <div className="items">
        
           
           <ul data-number="1"> Job Application</ul>
           <ul  data-number="2">Job Description</ul>
           <ul data-number="3"> Interview Process</ul>

        
        </div>
        <div className="description">
           
            <p>
             A job represents a new opening, an open position or a vacancy listing. Creating a job will allow you to add candidates to that job and advertise it on your career page and job boards.
            </p>
            
        </div> 
        <div className="forms">
        <Form/>
        </div>
        
        <div className="next">
         <button onClick={handleClick}>Save & Next</button>
        </div>
      </div>

   );
}
export default Page2;









// import React, { useState } from "react";
// import Form from "../components/Form";
// import { useNavigate } from "react-router-dom";

// function Page2() {
//   const navigate = useNavigate();
//   const [selectedItem, setSelectedItem] = useState(1);

//   const handleClick = () => {
//     // Set the selected item to 1 (Job Application) when clicking the "Next" button
//     setSelectedItem(1);

//     // Navigate to the next page
//     navigate("/page3");
//   };

//   return (
//     <div className="page2">
//       <div className="content2">Create A Job</div>

//       <div className="items">
//         <ul
//           data-number="1"
//           className={selectedItem === 1 ? "selected" : ""}
//           onClick={() => setSelectedItem(1)}
//         >
//           Job Application
//         </ul>
//         <ul
//           data-number="2"
//           className={selectedItem === 2 ? "selected" : ""}
//           onClick={() => setSelectedItem(2)}
//         >
//           Job Description
//         </ul>
//         <ul
//           data-number="3"
//           className={selectedItem === 3 ? "selected" : ""}
//           onClick={() => setSelectedItem(3)}
//         >
//           Interview Process
//         </ul>
//       </div>

//       <div className="description">
//         <p>
//           A job represents a new opening, an open position, or a vacancy listing. Creating a job will allow you to add candidates to that job and advertise it on your career page and job boards.
//         </p>
//       </div>

//       <div className="forms">
//         <Form />
//       </div>

//       <div className="next">
//         <button onClick={handleClick}>Save & Next</button>
//       </div>
//     </div>
//   );
// }

// export default Page2;

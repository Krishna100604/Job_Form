import React from "react";
import { useNavigate } from "react-router-dom";

function Page3(){

     const Navigate=useNavigate();
     function handleClick(){
        Navigate("/page4");
     }
     return(
        <div className="page3">
          <div className="content3">Create A Job
       
       </div>
       
         <div className="items">
       
          
          <ul data-number="1"> Job Application</ul>
          <ul  data-number="2">Job Description</ul>
          <ul data-number="3"> Interview Process</ul>

       
       </div>
       <div className="description1">
          
           <p>
            A job represents a new opening, an open position or a vacancy listing. Creating a job will allow you to add candidates to that job and advertise it on your career page and job boards.
           </p>
           
        </div> 
        <div className="Input1">
           Skills required:
           <div className="Ai">
           <button>Suggest With AI</button>
           </div>
           {/* <input type="text" placeholder="value"/> */}
           <div className="textHolder">

           </div>
        </div>
        <div className="Input2">
           Interns Responsibility:
           <div className="Ai1">
           <button>Edit With AI</button>
           </div>
           {/* <input type="text" placeholder="value"/> */}
           <input type="text" placeholder="selected interns day-to day responsibility include"/>
        </div>


        <div className="next1">
         <button onClick={handleClick}>Save & Next</button>
        </div>

        </div>
        
     );
}
export default Page3;
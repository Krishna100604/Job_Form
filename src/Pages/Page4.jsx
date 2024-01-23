import React from "react";
import Form2 from "../components/Form2";
import { useNavigate } from "react-router-dom";


function Page4(){

   const Navigate=useNavigate();

     function handleClick(){
        Navigate("/page5");
     }

     return(
        <div className="page4">
          <div className="content4">Create A Job
       
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
         <Form2/>
        
       <div className="big">
        <div className="Input4">
           Kindly Check The skills
           <div className="textholder">
           <input type="text" placeholder="SEO & SEM"/>
           </div>
         </div>
         
        <div className="Input5">
        Any Plateform or Qualification
           <div className="textholder2">
           <input type="text" placeholder="Yes"/>
           </div>
        </div>
       </div>

       <div className="big1">
        <div className="Input6">
        Finalise Questioner

           <div className="textholder3">
           <input type="text" placeholder="selected Intern’s day-to-day responsibilities include."/>
           </div>
         </div>
         
        <div className="Input7">
        Share Availiblity

           <div className="textholder4">
           <input type="text" placeholder="selected Intern’s day-to-day responsibilities include.
"/>
           </div>
        </div>
       </div>

       <div className="next2">
         <button onClick={handleClick}>Submit</button>
        </div>

        </div>


     );
}
export default Page4;
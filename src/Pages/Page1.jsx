import React from "react";
import Img1 from "../images/form_logo.png";
import Img2 from "../images/cancel_logo.png";
import { useNavigate } from "react-router-dom";


function Page1(){
  const Navigate=useNavigate();
  function handleClick(){

    Navigate("./Page2");
  }
   return(
    <div className="page1"> 
       <div className="content">Create A job</div>
      <img src={Img2} alt=""/>
      <div className="container">
        <div className="logo">
            <img src={Img1} alt=""/>
          <div className="content1">
            <button onClick={handleClick}>Post Job with AI</button>
          </div>
        </div>
      </div>

    </div>
   );
}

export default Page1;
import React from "react";
import Position from "./Position";
import Job from "./Job";
import Maxsalary from "./Maxsalary";
import Contract from "./Contract";
import Frequency from "./Frequency";
import Company from "./Company";
import Location from "./Location";
import Minsalary from "./Minsalary";
import Currency from "./Currency";

function Form(){
    return(
       <div className="form">
        <div className="first">       

         <Position/>
        <Job/>
        <Contract/>
        <Maxsalary/>
        <Frequency/>

        </div>
        <div className="second">       

        <Company/>
        <Location/>
        <Minsalary/>
        <Currency/>
        </div>

       </div> 
    );

}
export default Form;
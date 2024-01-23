import React from "react";
import Round1 from "./Round1";
import Round2 from "./Round2";
import Round3 from "./Round3";
import Finalround from "./Finalround";


function Form2(){
    return(
        <div className="form2">
            <Round1/>
            <Round2/>
            <Round3/>
            <Finalround/>
        </div>
    );
}
export default Form2;
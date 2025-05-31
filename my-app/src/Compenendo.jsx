import { useState } from "react";
function Compenendo(){

    let [age,setAge]=useState(0);

    const handleClick=()=>{
        setAge(age+1);
    }

    return(
         
        <div>
            <button onClick={()=>handleClick()}>Click Me</button>
            <p>{age}</p>
        </div>
    );

}

export default Compenendo;
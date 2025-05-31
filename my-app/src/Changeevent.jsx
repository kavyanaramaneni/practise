import { useState } from "react";

function Changeevent(){

    let [name,setName]=useState("");

    const handleChangeEvent=(e)=>{
        setName(e.target.value);
    }

    return(
         <div>
          <input value={name} onChange={handleChangeEvent}/>
          <p>Name:{name}</p>
         </div>

           
    );
}

export default Changeevent;
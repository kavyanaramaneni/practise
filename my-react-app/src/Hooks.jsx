import { useState } from "react";

function Hooks(){

    let [name,setName]=useState("Guest");
    let [age,setAge]=useState(0);
    let [isEmployed,setEmployed]=useState(false);
    const handleClick=()=>{
          setName("Bro Code");
    }
    const handleEvent=()=>{
        setAge(age+1);
    }
    const EventManage=()=>{
        setEmployed(!isEmployed);
    }

    return(
        <div>
        <p>Name:{isEmployed?"YES":"NO"}</p>
        <button onClick={EventManage}>Click Me</button>
        </div>
    );

}
export default Hooks;
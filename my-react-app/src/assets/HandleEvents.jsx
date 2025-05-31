import { useState } from "react";
function HandleEvent(){

    let [name,setName] =useState("Kavya");
    let [text,setArea]=useState("");
    let [payment,setPayment]=useState("");

    const handleClick=(event)=>{
          setName(event.target.value);
    };
    const handleEvent=(event)=>{
        setArea(event.target.value);
    }
    const handleEvents=(event)=>{
        setPayment(event.target.value);
    }
    return(
        <div>
        <input value={name} onChange={handleClick}/>
        <p>Name:{name}</p> 
        <textarea value={text} onChange={handleEvent} placeholder="Enter delivery instructions"/>
        <p>Area:{text} </p>
        
        <select value={payment} onChange={handleEvents}>
            <option value="">Select An Option</option>
            <option value="visa">Visa</option>
            <option value="mastercard">MasterCard</option>
            </select>
            <p>MasterCard:{payment}</p>
        </div>
    );
}
export default HandleEvent;
import axios from "axios";
import React,{useState} from "react";

export default function User(){
    
    const[result,setResult]=useState("Nothing");

    axios.get("https://reqres.in/api/users").then((res)=>{
          setResult(res.data.data);
          console.log(result)
    })
    return(
        <div className="container">
      <h2>This is User Page</h2>
      <pre>{JSON.stringify(result)}</pre>
    </div>
    )
}
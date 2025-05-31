import { useState } from "react";
function Dividendo(){

    let [count,setCount]=useState(0);

    const increment=()=>{
        setCount(count+1);
    }

    const decrement=()=>{
        setCount(count-1);
    }

    const Reset=()=>{
           setCount(0);
    }

    return(

        <div>
            <button onClick={()=>increment()}>increment</button>
            <button onClick={()=>decrement()}>Decrement</button>
            <button onClick={()=>Reset()}>Reset</button>
            <p>{count}</p>
        </div>

    );

}

export default Dividendo
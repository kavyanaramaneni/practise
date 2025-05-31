import { useState } from "react";
function ChangeObj(){

   const [car,setCar]=useState({year:2023,make:"Car",model:"Mustang"});

   const handleChangeYear=(e)=>{
          setCar({...car,year:e.target.value});
   };

   const handleChangeMake=(e)=>{
        setCar({...car,make:e.target.value});

   };

   const handleChangeModel=(e)=>{

    setCar({...car,model:e.target.value})

   };
    
    return(
     <div>
        <p>Your Favourite Car is {car.year} {car.make} {car.model}</p>
        <input type="number" value={car.year}onChange={handleChangeYear}/>
        <input type="text" value={car.make} onChange={handleChangeMake}/>
        <input type="text" value={car.model} onChange={handleChangeModel}/>
     </div>


    );

}
export default ChangeObj;
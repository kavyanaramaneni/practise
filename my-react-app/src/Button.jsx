
function Button(){

    // const arrowFunction=()=>{
    //     console.log("Hello");
    // };
    // const arrowFunction=(name)=>{
    //       console.log(`${name}, stop clicking me`)
    // };
    let count=0;
    const handleClick=(name)=>{
             if(count<3){
                count++;
                console.log(`${name} you clicked me ${count}`);
             }
             else{
                   console.log(`${name} stop clicking me`);
             }
    };
     return(
    <button onClick={()=>handleClick("bro")}>Click Me</button>
     );

}
export default Button;
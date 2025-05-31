function Srusti(props){

    
    

    return(
        <div>
            <h1>Fruits:</h1>
            {
                props.bable.map(fruit=>(<p>{fruit}</p>

                ))
            }
           
        </div>
    );

}
export default Srusti;
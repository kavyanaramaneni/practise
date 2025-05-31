function Andaman(props){

    const name=<p>Name:{props.name}</p>;

    const age=<h1>Please Be Logged In</h1>
   
    return(props.isLoggedIn?name:age);

}
export default Andaman;
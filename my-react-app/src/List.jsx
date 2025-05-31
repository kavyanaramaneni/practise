function List(props){
   
        const listItem=props.items;
        return(
            <div>
            {
            listItem.map(item=>(<p>ID:{item.id}<br/>
            Name:{item.name}<br/>
            Age:{item.age}</p>))
        }
        </div>
    );
}
export default List;
import classes from './List.module.css'
const List=(props)=>{
    console.log("abc",props.data)
return(
<ul className={classes.list}>
    {props.data.map((user)=>(<li key={user.id}>User Name:{user.userName}___Age:{user.age}</li>))}
</ul>);
}
export default List;
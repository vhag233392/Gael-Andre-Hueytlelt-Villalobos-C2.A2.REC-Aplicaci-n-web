
import "./TodoSearch.css";
function TodoSearch({newTodoText, setNewTodoText}){

    

    return(
        
        <input type="text" 
        placeholder="INGRESE UN TODO"
        value={newTodoText}
        onChange={(event) => {
            setNewTodoText(event.target.value);
        }}
        />
    )

}


export default TodoSearch; 
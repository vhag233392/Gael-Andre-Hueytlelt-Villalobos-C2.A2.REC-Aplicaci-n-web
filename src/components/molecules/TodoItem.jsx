import Button from "../atoms/Button";
import "./TodoItem.css"

function TodoItem(props){


    return(
    <div id="TodoItem">

        <li>
            <span style={{ color: props.completed ? '#00ff0c' : 'white' }}>
            {props.completed ? 'COMPLETADO' : 'NO COMPLETADO'}
            </span>
            <p>{props.text}</p>
            <Button boton = {"completar"} onClick={props.onComplete} ></Button><br />
            <Button boton = {"Eliminar"} onClick={props.onDelete} ></Button>
            
        </li>
    </div>
    )
}


export default TodoItem;
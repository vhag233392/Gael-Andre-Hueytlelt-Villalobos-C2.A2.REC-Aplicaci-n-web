import { useState } from "react";
import CrearTodoButton from "../molecules/CrearTodoButton";
import TodoItem from "../molecules/TodoItem";
import TodoList from "../molecules/TodoList";
import TodoSearch from "../molecules/TodoSearch";
import "./TodoMachine.css"
import Swal from "sweetalert2";

const defaultTodo = [
    
];

function TodoMachine(){
    const [todos, setTodos] = useState(defaultTodo);
    const [newTodoText, setNewTodoText] = useState("");

    const completeTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
            (todo) => todo.text === text
        );
        newTodos[todoIndex].completed = true;
        setTodos(newTodos); 
    }
    
    const deleteTodo = (text) => {
        const newTodos = todos.filter(todo => todo.text !== text);
        setTodos(newTodos); 
    }
    
    const crearTodo = () => {
        const newTodos = [...todos, { text: newTodoText, completed: false }];
        setTodos(newTodos);
        setNewTodoText("");

        Swal.fire({
            icon: 'success',
            title: 'El TODO Ha sido agregado',
            showConfirmButton: false,
            timer: 1000
        });
    }

    return(
        <div id="TodoMachineContainer">
            <h1>TODO LIST</h1>
            <TodoSearch
                newTodoText={newTodoText}
                setNewTodoText={setNewTodoText}
            />

            <TodoList>
                {todos.map(todo => (
                    <>
                    <TodoItem
                        key={todo.text} 
                        text={todo.text} 
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                        />
                    <br />
                        </>
                ))}
            </TodoList>

            <CrearTodoButton boton={"Crear TODO"} onClick={crearTodo} />
        </div>
    )
}

export default TodoMachine;

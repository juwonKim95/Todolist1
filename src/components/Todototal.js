import React,{ useState } from 'react';
import "./Todototal.css";

const TodoTotal = () => {
    const inputTextArr = useState("");
    console.log(inputTextArr);
    const inputText = inputTextArr[0];
    const setInputText = inputTextArr[1];
    const [ todoLists, setTodoLists ] = useState([
        {id:1, text: "할일1"},
        {id:2, text: "할일2"},
    ])
    const onAddTodo = () => {
        const newTodolists = [
            ...todoLists,
            { id: todoLists.length+1, text: inputText}
        ]
        setTodoLists(newTodolists);
        setInputText("");
    }
    const onChange = (e) => {
        setInputText(e.target.value);
        console.log(inputText);
    }
    const delTodoLists = (id) => {
        const newTodolists = todoLists.filter(todo=> todo.id !== id);
        setTodoLists(newTodolists);
    }
    return (
        <div className='todo'>
            <div className='header'>
                <h2>To do List</h2>
                <div>
                    <input value={inputText} onChange={onChange} />
                    <button onClick={onAddTodo}>+</button>
                </div>
            </div>
            <div>
                <ul className='todoLists'>
                    {todoLists.map(todo=><li key={todo.id} style={{color: todo.isDone ? '#ccc' : '#333'}}>{todo.text}
                        <span>{todo.text}</span>
                    <button onClick={()=>delTodoLists(todo.id)}>X</button></li>)}
                </ul>
            </div>
        </div>
        
    );
};

export default TodoTotal;
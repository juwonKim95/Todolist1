import React from 'react';

const Todolists = ({ todoLists, delTodoLists, onIsDoneToggle}) => {
    return (
        <div>
            <ul className='todoLists'>
                {todoLists.map(todo=><li key={todo.id} style={{color: todo.isDone ? '#ccc' : '#333'}}>
                    <span onClick={()=>onIsDoneToggle(todo.id)}>{todo.text}</span>
                <button onClick={()=>delTodoLists(todo.id)}>X</button></li>)}
            </ul> 
        </div>
    );
};

export default Todolists;
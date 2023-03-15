import React, { useEffect } from 'react';
import "./Todototal.css";

const HeaderInput = (props) => {
    const {inputText, onChange, onAddTodo} = props;
    useEffect(()=>{
        console.log("");
    })
    return (
        <div className='header'>
            <h2>To do List</h2>
            <div>
                <input value={inputText} onChange={onChange} />
                <button onClick={onAddTodo}>+</button>
            </div>
        </div>
    );
};
export default HeaderInput;
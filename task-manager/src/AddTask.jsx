import React from 'react'
import { useState } from 'react'
import { useContext } from 'react';
import TaskContext from './store/task-context';

export default function AddTask() {
    const taskContext = useContext(TaskContext); 

    const[text,setText]=useState(""); 
    const handleChange=(evt)=>{
        setText(evt.target.value);
    }
  return (
    <div>
        <input value ={text} onChange={handleChange}/>
        <button onClick={()=> taskContext.addHandler(text)}>Add task</button>
    </div>
  )
}

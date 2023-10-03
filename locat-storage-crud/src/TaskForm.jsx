import React from 'react'
import { useState } from 'react'

export default function TaskForm({ addTask }) {
    const [text, setText] = useState("");
    const updateText = (evt) => {
        setText(evt.target.value)
    }
    const handleClick = () => {
        addTask(text);
        console.log(text)
    }
    return (
        <div>
            <input value={text} placeholder="enter task" type='text' onChange={updateText} />
            <button onClick={handleClick}>add task</button>
        </div>
    )
}

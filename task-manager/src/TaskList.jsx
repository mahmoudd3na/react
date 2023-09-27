import React from 'react'
import { useContext } from 'react'
import TaskContext from './store/task-context'

export default function TaskList() {
    const taskContext = useContext(TaskContext); 
    return (
        <div>
            {taskContext.tasks.map((task, index) =>{
                return <>
                    <p key={index}>{task}</p>
                    <button onClick={() => taskContext.deleteTask(index)}>delete</button>
                </>
            })}
        </div>
    )
}

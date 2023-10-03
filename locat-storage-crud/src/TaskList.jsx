import React from 'react'

export default function TaskList({ tasks, deleteTask }) {
    const isComplete = (completed) => {
        if (completed)
            return {
                textDecoration: "line-through",
            }
    }
    return (
        <div>
            <ul>
                {
                    tasks.map(task => {
                        return <li>
                            <p key={task.key} style={isComplete(task.completed)}>{task.task}</p>
                            <button onClick={()=> deleteTask(task.key)}>delete</button>
                        </li>
                    })
                }
            </ul>

        </div>
    )
}

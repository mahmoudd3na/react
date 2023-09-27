import React from "react"
import { createContext } from "react"

const TaskContext = createContext({
    tasks: [],
    deleteTask: () => { },
    addHandler: () => { },
}); 

export default TaskContext; 
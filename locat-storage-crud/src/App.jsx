import TaskForm from './TaskForm'
import './App.css'
import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'; // to generate random numbers
import TaskList from './TaskList';

function App() {
  const [tasks, setTasks] = useState([]);


  useEffect(() => {
    if (localStorage.getItem("tasks")) {
      setTasks(JSON.parse(localStorage.getItem("tasks")))
    }
  }, [])

  const addTask = (text) => {
    const updatedTasks = [...tasks, { task: text, completed: false, key: uuidv4() }];
    handleUpdate(updatedTasks); 
  }
  const deleteTask = (key) => {
    const updatedTasks = tasks.filter(task => task.key !== key);
    handleUpdate(updatedTasks);
  }
  const handleUpdate = (updatedTasks) => {
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setTasks(updatedTasks);
  }


  return (
    <>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} />

    </>
  )
}

export default App

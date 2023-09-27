import { useState } from 'react'
import './App.css'
import AddTask from './AddTask';
import TaskList from './TaskList';
import TaskContext from './store/task-context';

function App() {
  const [tasks, setTasks] = useState([]);
  const addHandler = (text) => {
    setTasks(oldTasks => {
      return [...oldTasks, text]

    })
  }

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  }


  return (
    <>
      <TaskContext.Provider 
      value ={{
        tasks : tasks, 
        addHandler: addHandler, 
        deleteTask: deleteTask
      }}
      >
        <AddTask/>
        <TaskList  />

      </TaskContext.Provider>
    </>
  )
}

export default App

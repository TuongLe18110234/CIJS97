import { useState } from "react";
import Task from "./Task/Task";

function TodoApp() {
  const [taskName, setTaskName] = useState('');
  const [tasks, setTasks] = useState([]);

  const onInputTaskChange = (event) => {
    setTaskName(event.target.value);
    console.log(taskName);
  }
  
  const addTask = () => {
    const newTask = {
      name: taskName,
      id: tasks.length == 0
          ? 0
          : tasks[tasks.length - 1].id + 1,
      checked: false
    }
    setTasks(prev => {
      return [...prev, newTask]
    });
    setTaskName('');
  }

  const deleteTask = (taskId) => {
    setTasks([...tasks.filter(task => task.id != taskId)]);
  }

  const updateTask = (newTask) => {
    const task = tasks.find(task => task.id == newTask.id);
    task.name = newTask.name;
    task.checked = newTask.checked;
    setTasks([...tasks]);
  }

  return (
    <>
      <h1>Todo App</h1>
      <input
        onChange={onInputTaskChange}
        placeholder="Add something to do"
        onKeyDown={
          (e) => {
            if (e.key === 'Enter') {
              addTask();
            }
          }
        }
        value={taskName}>
      </input>
      <button onClick={addTask}>Save</button>
      {
        tasks.map(task => {
          return <Task
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            updateTask={updateTask}/>
        })
      }
    </>
  )
}

export default TodoApp;
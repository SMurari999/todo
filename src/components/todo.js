import React, { useState, useEffect,useRef } from "react";
import "../styles/todo.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [number,setNumber] = useState(0)
  const inputRef = useRef(null); 
  useEffect(() =>{
    const length =()=>{
      setNumber(tasks.length);
    }
    length()
  },[tasks])
  
  useEffect(() => {
    inputRef.current.focus(); 
  }, []);

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask("");
      inputRef.current.focus();
    }
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="todo-container">
      <h1>To-Do List</h1>
      <div className="input-section">
        <input
          type="text"
          ref={inputRef}
          placeholder="Add a new task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className={task.completed ? "completed" : ""}>
            <span onClick={() => toggleTaskCompletion(index)}>{task.text}</span>
            <button className="delete-btn" onClick={() => deleteTask(index)}>
              ❌
            </button>
          </li>
        ))}
      </ul>
      <h3>Number of tasks {number}</h3>
    </div>
  );
}

export default App;
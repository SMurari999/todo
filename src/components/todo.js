import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleTodo, deleteTodo } from "../store";
import "../styles/todo.css";

function App() {
  const [newTask, setNewTask] = useState("");
  const inputRef = useRef(null);

  // Redux hooks
  const tasks = useSelector((state) => state.todos); // Fetch tasks from Redux
  const dispatch = useDispatch(); // Dispatch actions to Redux

  // Focus on input field when component mounts
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      dispatch(addTodo(newTask)); // Dispatch Redux action
      setNewTask(""); // Clear input
      inputRef.current.focus();
    }
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
        <button onClick={handleAddTask}>Add</button>
      </div>

      <ul>
        {tasks.map((task) => (
          <li key={task.id} className={task.completed ? "completed" : ""}>
            <span onClick={() => dispatch(toggleTodo(task.id))}>{task.text}</span>
            <button className="delete-btn" onClick={() => dispatch(deleteTodo(task.id))}>
              ❌
            </button>
          </li>
        ))}
      </ul>
      <h3>Number of tasks: {tasks.length}</h3>
    </div>
  );
}

export default App;

import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleTodo, deleteTodo } from "../store";
import { useNavigate } from "react-router-dom";
import "../styles/todo.css";

function App() {
    const navigate = useNavigate()
  const todotask = ()=>{
    navigate('/todos')
  }

  return (
    <div className="todo-container">
      <h1>Welcome to todo list</h1>
      <button onClick={todotask}>Main page</button>
    </div>
  );
}

export default App;

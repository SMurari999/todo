import React, { useState } from "react";
import { AddTodo } from "../api/api";


const TodoList = ({ data, setData }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    if (!newTodo.trim()) return;
    
    AddTodo(newTodo).then((todo) => {
      setData((prev) => [...prev, todo]);
      setNewTodo("");
    });
  };

  return (
    <div className="space-y-4">
      <div className="flex space-x-2">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new task..."
          className="p-2 border rounded flex-grow"
        />
        <button onClick={handleAddTodo} className="p-2 bg-blue-500 text-white rounded">
          Add
        </button>
      </div>

      <ul className="space-y-2">
        {data.map((todo) => (
          <li key={todo.id} className="p-2 border rounded bg-gray-100">
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

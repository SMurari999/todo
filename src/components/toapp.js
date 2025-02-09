import React from "react";
import Todo from "./todo";
import Loadtodo from "./loadtodo";
import { FetchTodos } from "../api/api";

// Wrap TodoList with the HOC
const TodoList = Loadtodo(Todo, FetchTodos);

export default function TodoApp() {
  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h1 className="text-xl font-bold">To-Do List</h1>
      <TodoList />
    </div>
  );
}

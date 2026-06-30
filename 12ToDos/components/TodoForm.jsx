import React, { useState } from "react";
import useToDoProvider from "../todoContext/todoContext";

function TodoForm() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useToDoProvider();

  const add = (e) => {
    e.preventDefault();

    if (!todo.trim()) return;

    addTodo({
      todo,
      completed: false,
    });

    setTodo("");
  };

  return (
    <form
      onSubmit={add}
      className="flex items-center gap-3 bg-white/10 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/20"
    >
      <input
        type="text"
        placeholder="✨ What's on your mind?"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        className="flex-1 px-5 py-3 rounded-xl bg-white text-gray-800 placeholder-gray-400 outline-none border-2 border-transparent focus:border-blue-500 focus:ring-4 focus:ring-blue-200 transition-all duration-300"
      />

      <button
        type="submit"
        className="px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
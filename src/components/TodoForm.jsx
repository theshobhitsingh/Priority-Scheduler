import React, { useState } from "react";
import { useToDo } from "../contexts/ToDoContext";

function TodoForm() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useToDo();

  const add = (e) => {
    e.preventDefault();

    if (!todo) return;
    addTodo({ todo, completed: false });
    setTodo("");
  };

  return (
    <form onSubmit={add} className="flex">
      <input
        type="text"
        name="body"
        placeholder="🤔 What's on the agenda?"
        className="w-full border text-2xl border-black/10 rounded-l-lg px-5 outline-none duration-150 bg-white/20 py-2.5"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-blue-600 text-white shrink-0"
      >
        𝘼𝙙𝙙 𝙏𝙖𝙨𝙠
      </button>
    </form>
  );
}

export default TodoForm;

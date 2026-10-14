import  { useState, memo } from 'react'
import { initialTodos } from "../initialTodos";
import '../App.css'

const Todo = memo( function Todo({ todo, handleUpdateTodoCompletion }) {
  return (
      <div style={{ textAlign: "left" }} key={todo.id}>
        <label style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => handleUpdateTodoCompletion(todo.id)}
          />
          {todo.text}
        </label>
      </div>
  );
})

export default function WithMemo() {
  const [todos, setTodos] = useState(initialTodos);

  const handleUpdateTodoCompletion = (id) => {
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }


  return (
    <>
      <section id="center">
        <h2>Todo</h2>
        <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "10px" }}>
          {todos?.map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              handleUpdateTodoCompletion={handleUpdateTodoCompletion}
            />
          ))}
        </div>
      </section>
    </>
  );
}


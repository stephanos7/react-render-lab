import  { useState, useCallback, memo } from 'react'
import { initialTodos } from "./initialTodos";
import './App.css'

// const Todo = memo( function Todo({ todo, handleUpdateTodoCompletion }) {})

const Todo = memo( function Todo({ todo, handleUpdateTodoCompletion }) {
  return (
      <div style={{ textAlign: "left" }} key={todo.id}>
        <label>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => handleUpdateTodoCompletion(todo.id)}
          />
          {todo.text}
        </label>
      </div>
  );
}
)

function App() {
  const [todos, setTodos] = useState(initialTodos);

  // const handleUpdateTodoCompletion = useCallback((id) => {},[]);

  const handleUpdateTodoCompletion = useCallback((id) => {
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }
  ,[]);

  return (
    <>
      <section id="center">
        <div>
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

export default App

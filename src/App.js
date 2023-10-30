import { useState, useEffect } from 'react';
import GetInput from './GetInput';
import List from './List';
import "./styles.css"

function App() {
  // Load todos from local storage on initial load
  const [todos, setTodos] = useState(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    return storedTodos;
  });

  // Save todos to local storage whenever the todos state changes
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <div className='wrapper'>
      <header className='heading'>
        <h1>Todo-list</h1>
      </header>
      <div className='inputarea'>
        <GetInput todos={todos} setTodos={setTodos} />
      </div>
      <div>
        <List todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
}

export default App;

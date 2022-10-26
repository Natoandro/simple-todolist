import { useState } from 'react';
import styles from './App.module.css';
import Input from './components/Input';
import TodoItem from './components/TodoItem';

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        <div className={styles.HeaderContainer}>
          <h1>My todolist app</h1>
        </div>
      </header>
      <main>
        <Input onAdd={todo => setTodos(todos => [...todos, todo])} />
        <ul className={styles.TodoList}>
          {todos.map((todo) => (
              <TodoItem key={todo.id}>{todo.title}</TodoItem>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;

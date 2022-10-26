import { useState } from 'react';
import styles from "./TodoItem.module.css";
import clsx from 'clsx';

export default function TodoItem({ children }) {
  const [done, setDone] = useState(false);

  return (
    <li className={clsx(styles.TodoItem, done && styles.Done)}>
      <label>
        <input
          type="checkbox"
          className={styles.CheckBox}
          checked={done}
          onChange={() => setDone((done) => !done)}
        />
        {children}
      </label>
    </li>
  )
}
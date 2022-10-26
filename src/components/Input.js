import { useState } from 'react';
import styles from "./Input.module.css";
import clsx from "clsx";

let latestId = 0;

export default function Input({ onAdd }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({
      id: ++latestId,
      title: text,
    });
    setText("");
  }

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Ny zavatra hatao manaraka..."
        className={styles.input}
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <p className={clsx(styles.helperText, text === "" && "hidden")}>
        Tsindrio ny entrée raha hampiditra ny asa vaovao...
      </p>
      <button type="submit" className={styles.button}></button>
    </form>
  );
}

/**
 * Write a react component for a do to list
 * 1.Add 1 input field  and a button by clicking on button display entered task on the same page
 * 2.ALso add delete button with each added task to delee the task
 */

import { useState } from "react";

function Us7() {
  const [task, setTask] = useState("");
  const [todolist, setToDoList] = useState([]);

  const addTask = () => {
    setToDoList([
      ...todolist,
      {
        id: Date.now(),
        name: task,
      },
    ]);
  };

  const deleteTask = (id) => {
    setToDoList(todolist.filter((task) => task.id !== id));
  };

  return (
    <div>
      <input value={task} onChange={(e) => setTask(e.target.value)} />
      <button onClick={addTask}>Add</button>
      {todolist.map((task) => (
        <div key={task.id}>
          <h3>{task.name}</h3>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default Us7;


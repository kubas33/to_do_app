import React, { useState } from "react";

export default function InputTask({ onAddTask }) {
  const [taskText, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const task = {
      taskText: taskText,
      isCompleted: false,
    };
    onAddTask(task);
    console.log(task);
    setTask("");
  };

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  return (
    <form className="input" onSubmit={handleSubmit}>
      <span className="check-btn"></span>
      <input
        type="text"
        placeholder="Create a new todo..."
        value={taskText}
        onChange={handleChange}
      ></input>
    </form>
  );
}

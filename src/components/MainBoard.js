import React, { useState } from "react";
import InputTask from "./InputTask";
import TasksCont from "./TasksCont";

export default function MainBoard() {
  const [tasks, setTasks] = useState([]);

  const generateNewId = (tasks) => {Math.max(...tasks.map(i => i.id)) + 1;

  const handleAddTask = (newTask) => {
    const id = generateNewId(tasks);
    console.log({id});
    newTask.id = id;
    setTasks([...tasks, newTask]);

  };

  return (
    <main className="container">
      <h1>TODO</h1>
      <InputTask onAddTask={handleAddTask} />
      <TasksCont tasks={tasks} />
      <p className="drag-drop">Drag and drop to reorder list</p>
    </main>
  );
}

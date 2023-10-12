import React, { useState, useEffect } from "react";
import InputTask from "./InputTask";
import TasksCont from "./TasksCont";

export default function MainBoard() {
  const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const [tasks, setTasks] = useState(storedTasks);

  const [uncompletedCount, setUncompletedCount] = useState(
    tasks.filter((task) => !task.isCompleted).length,
  );

  const updateUncompletedTasksCount = (updatedTasks) => {
    if (updatedTasks && updatedTasks.length > 0) {
      const counter = updatedTasks.filter((task) => !task.isCompleted).length;
      setUncompletedCount(counter);
    }
  };

  useEffect(() => {
    if (storedTasks) {
      setTasks(storedTasks);
      updateUncompletedTasksCount(tasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    console.log(localStorage);
  }, [tasks]);

  const generateNewId = (tasks) =>
    tasks.length === 0 ? 1 : Math.max(...tasks.map((i) => i.id)) + 1;

  const generateNewId = (tasks) => {Math.max(...tasks.map(i => i.id)) + 1;

  const handleAddTask = (newTask) => {
    const id = generateNewId(tasks);
    console.log({ id });
    newTask.id = id;
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks, newTask];
      updateUncompletedTasksCount(updatedTasks); // Aktualizuj licznik po zaktualizowaniu stanu tasks
      return updatedTasks;
    });
  };

  return (
    <main className="container">
      <h1>TODO</h1>
      <InputTask onAddTask={handleAddTask} />
      <TasksCont
        tasks={tasks}
        setTasks={setTasks}
        onUpdateUncompletedTasksCount={updateUncompletedTasksCount}
        uncompletedCount={uncompletedCount}
      />
      <p className="drag-drop">Drag and drop to reorder list</p>
    </main>
  );
}

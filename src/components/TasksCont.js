import React, { useState } from "react";
import Filters from "./Filters";
import Task from "./Task";

export default function TasksCont({
  tasks,
  setTasks,
  onUpdateUncompletedTasksCount,
  uncompletedCount,
}) {
  const [activeFilter, setActiveFilter] = useState("all");
  const handleOnComplete = () => {
    onUpdateUncompletedTasksCount(tasks);
  };

  const handleClearCompleted = () => {
    tasks = tasks.filter((task) => !task.isCompleted);
    console.log("tasks to clear:" + tasks);
    setTasks(tasks);
  };

  const filteredTasks = tasks.filter((task) => {
    if (activeFilter === "active") {
      return !task.isCompleted;
    } else if (activeFilter === "completed") {
      return task.isCompleted;
    }
    return true; // "All" - wyświetl wszystkie zadania
  });

  return (
    <div className="tasks-container">
      <ul>
        {filteredTasks.map((task) => (
          <React.Fragment key={task.id}>
            <Task taskData={task} onComplete={handleOnComplete} />
            <hr></hr>
          </React.Fragment>
        ))}
      </ul>
      <div className="controls">
        <span className="counter">{uncompletedCount} items left</span>
        <Filters
          setActiveFilter={setActiveFilter}
          activeFilter={activeFilter}
        />
        <button onClick={handleClearCompleted}>Clear Completed</button>
      </div>
    </div>
  );
}

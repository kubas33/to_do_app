import { useState } from "react";

export default function Task({ taskData, onComplete }) {
  const toggleCompleted = () => {
    taskData.isCompleted = !taskData.isCompleted;
    setIsCompleted(taskData.isCompleted);
    onComplete();
  };

  const [isCompleted, setIsCompleted] = useState(taskData.isCompleted);

  return (
    <li className="task">
      <button className="task-btn" onClick={toggleCompleted}>
        <span
          className={"check-btn " + (isCompleted ? "completed" : "")}
        ></span>
        <span className="task-text">{taskData.taskText}</span>
      </button>
      <button>
        <img src="./images/icon-cross.svg" alt="delete task"></img>
      </button>
    </li>
  );
}

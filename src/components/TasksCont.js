import React, { useState } from "react";
import Task from "./Task";

export default function TasksCont({ tasks }) {
  return (
    <div className="tasks-container">
      <ul>
        {tasks.map((task) => (
          <>
            <Task taskData={task} />
            <hr></hr>
          </>
        ))}
      </ul>
      <div className="controls">
        <span>
          {tasks.filter((task) => !task.isCompleted).length} items left
          {/*TODO: Counter is not updating */}
        </span>
        <ul>
          <li>
            <button>All</button>
          </li>
          <li>
            <button>Active</button>
          </li>
          <li>
            <button>Completed</button>
          </li>
        </ul>
        <button>Clear Completed</button>
      </div>
    </div>
  );
}

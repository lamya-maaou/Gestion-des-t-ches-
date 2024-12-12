import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

function TaskItem({ task, toggleComplete, deleteTask }) {
  return (
    <div className="task-item">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleComplete(task.id)}
      />
      <span
        style={{
          textDecoration: TextTrackList.completed ? "line-through" : "none",
        }}
      >
        {task.text}
      </span>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
}

export default TaskItem;

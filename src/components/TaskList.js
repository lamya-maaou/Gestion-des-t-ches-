import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import TaskItem from "./TaskItem";
import "./TaskList.css";

function TaskList({ tasks, toggleComplete, deleteTask }) {
  return (
    <TransitionGroup>
      {tasks.map((task) => (
        <CSSTransition key={task.id} timeout={300} classNam es="task">
          <TaskItem
            task={task}
            toggleComplete={toggleComplete}
            deleteTask={deleteTask}
          />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
}

export default TaskList;

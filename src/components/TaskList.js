import React, { useState } from "react";
import TaskItem from "./TaskItem";

//props: tasks (each has name, class, due), deleteTask, count

const TaskList = (props) => {
  return (
    <div class="flex flex-col">
      {props.tasks.map((task) => (
        <TaskItem
          deleteTask={props.deleteTask}
          id={task.id}
          name={task.name}
          class={task.class}
          due={task.due}
        />
      ))}
    </div>
  );
};

export default TaskList;

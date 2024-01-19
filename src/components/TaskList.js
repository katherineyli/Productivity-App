import React, { useState } from "react";
import TaskItem from "./TaskItem";

//props: tasks (each has name, class, due), setTasks

const TaskList = (props) => {
  return (
    <div class="flex flex-col">
      {props.tasks.map((task) => (
        <TaskItem name={task.name} class={task.class} due={task.due}/>
      ))}
    </div>
  );
};

export default TaskList;

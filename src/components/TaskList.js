import React from "react";
import TaskItem from "./TaskItem";

const TaskList = () => {
  return (
    <ul class="flex flex-col">
      <TaskItem name="Task 1" due="Jan 19" class="6.101" />
      <TaskItem name="Task 2" due="Jan 20" class="8.02"/>
      <TaskItem name="Task 3" due="Jan 21" class="6.9620"/>
    </ul>
  );
}

export default TaskList;

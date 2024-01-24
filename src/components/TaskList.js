import React, { useState, useEffect } from "react";
import TaskItem from "./TaskItem";

//props: tasks (each has name, class, due), deleteTask, count

const TaskList = (props) => {
  
  if (props.filteredTasks.length === 0) {
    return (
      <div class="mx-12 mt-2 flex justify-center text-gray-500">
        No current tasks
      </div>
    );
  }
  return (
    <div class="flex flex-col h-4/5 overflow-auto mx-12">
      {props.filteredTasks.map((task) => (
        <TaskItem
          taskId={task.task_id}
          content={task.content}
          course={task.course}
          due={task.due}
          reminder={task.reminder}
          priority={task.pri}
          getTasks={props.getTasks}
        />
      ))}
    </div>
  );
};

export default TaskList;

import React from "react";
import TaskList from "../components/TaskList";

const Tasks = () => {
  return (
    <div class="flex-1 flex-col">
      <h1 class="ml-4 bg-white h-24 items-center pl-8 text-3xl font-semibold flex">
        Tasks
      </h1>
      <div class="flex items-center justify-between mb-1 h-12 mx-12">
        <div class="flex">
          <select
            name="filter"
            class="flex bg-gray-200 rounded-lg items-center p-1 mr-4 w-24 justify-center"
          >
            <option value="allTasks">All Tasks</option>
            <option value="overdue">Overdue</option>
          </select>
          <select
            name="filter"
            class="flex bg-gray-200 rounded-lg items-center p-1 mr-4 w-24 justify-center"
          >
            <option value="allTasks">All Tasks</option>
            <option value="overdue">Overdue</option>
          </select>
        </div>
        <button class="flex bg-gray-200 p-1 rounded-lg items-center w-32 justify-center">
          + New Task
        </button>
      </div>
      <TaskList />
    </div>
  );
}

export default Tasks;

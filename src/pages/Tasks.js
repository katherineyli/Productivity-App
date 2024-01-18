import React from "react";

function Tasks() {
  return (
    <div class="flex-1 flex-col">
      <h1 class="bg-white h-24 items-center pl-8 text-3xl font-semibold flex">
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
      <ul class="flex flex-col">
        <li class="flex justify-between bg-white mx-12 mb-2 p-3 border rounded-lg border-gray-200">
          <div class="flex items-center">
            <input type="checkbox" id="task1" name="task1" />
            <label for="task1" class="ml-2">
              Task 1
            </label>
          </div>
          <div class="flex items-center">
            <div class="mr-4 text-sm bg-gray-100 py-1 px-6 rounded-lg">
              6.101
            </div>
            <p class="text-sm mr-2">Jan 19</p>
          </div>
        </li>

        <li class="flex bg-white mx-12 mb-2 p-3 border rounded-lg border-gray-200">
          <input type="checkbox" id="task2" name="task2" />
          <label for="task2" class="ml-2">
            Task 2
          </label>
        </li>
        <li class="flex bg-white mx-12 mb-2 p-3 border rounded-lg border-gray-200">
          <input type="checkbox" id="task3" name="task3" />
          <label for="task3" class="ml-2">
            Task 3
          </label>
        </li>
      </ul>
    </div>
  );
}

export default Tasks;

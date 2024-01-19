import React, { useState } from "react";
import TaskList from "../components/TaskList";
import NewTask from "../components/NewTask";

const Tasks = () => {
  const [isNewTask, setIsNewTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  const addNewTask = () => {
    setIsNewTask(true);
  };

  
  
  return (
    <>
      <div class="grow relative">
        <h1 class="ml-4 bg-white h-24 items-center pl-8 text-3xl font-semibold flex">
          Tasks
        </h1>
        <div class="flex items-center justify-between mb-1 h-12 mx-12">
          <div class="flex">
            <select
              name="filter"
              class="flex rounded-lg items-center p-1 mr-4 w-24 justify-center border border-gray-200"
            >
              <option value="allTasks">All Tasks</option>
              <option value="overdue">Overdue</option>
            </select>
          </div>
          <button
            onClick={addNewTask}
            class="flex bg-gray-200 p-1 rounded-lg items-center w-32 justify-center hover:bg-gray-300"
          >
            + New Task
          </button>
        </div>
        <TaskList tasks={tasks} setTasks={setTasks} />
        {isNewTask && (
          <NewTask
            setIsNewTask={setIsNewTask}
            tasks={tasks}
            setTasks={setTasks}
          />
        )}
      </div>
    </>
  );
};

export default Tasks;

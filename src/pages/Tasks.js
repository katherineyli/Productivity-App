import React, { useState } from "react";
import TaskList from "../components/TaskList";
import NewTask from "../components/NewTask";

const Tasks = () => {
  const [isNewTask, setIsNewTask] = useState(false);
  const [allTasks, setAllTasks] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [count, setCount] = useState(0);
  const [selectedClass, setSelectedClass] = useState("");

  const addNewTask = () => {
    setIsNewTask(true);
  };

  const deleteTask = (taskId) => {
    const newTasks = allTasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
    setAllTasks(newTasks);
  };

  const handleClassChange = (event) => {
    const value = event.target.value;
    setSelectedClass(value);
    if (value === "all") {
      setTasks(allTasks);
    } else {
      const newTasks = allTasks.filter((task) => task.class === value);
      setTasks(newTasks);
    }
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
              name="status"
              class="flex rounded-lg items-center p-1 mr-4 w-30 justify-center border border-gray-200"
            >
              <option value="current">Current</option>
              <option value="completed">Completed</option>
            </select>
            <select
              value={selectedClass}
              onChange={handleClassChange}
              name="class"
              class="flex rounded-lg items-center p-1 mr-4 w-30 justify-center border border-gray-200"
            >
              <option value="all">All Classes</option>
              <option value="6.9620">6.9620</option>
              <option value="6.S191">6.S191</option>
            </select>
          </div>
          <button
            onClick={addNewTask}
            class="flex bg-gray-200 p-1 rounded-lg items-center w-32 justify-center hover:bg-gray-300"
          >
            + New Task
          </button>
        </div>
        <TaskList count={count} deleteTask={deleteTask} tasks={tasks} />
        {isNewTask && (
          <NewTask
            count={count}
            setCount={setCount}
            setIsNewTask={setIsNewTask}
            tasks={tasks}
            setTasks={setTasks}
            allTasks={allTasks}
            setAllTasks={setAllTasks}
            selectedClass={selectedClass}
          />
        )}
      </div>
    </>
  );
};

export default Tasks;

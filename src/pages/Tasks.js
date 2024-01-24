import React, { useState, useEffect } from "react";
import TaskList from "../components/TaskList";
import NewTask from "../components/NewTask";

const Tasks = (props) => {
  const [isNewTask, setIsNewTask] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [selectedClass, setSelectedClass] = useState("all");

  const addNewTask = () => {
    setIsNewTask(true);
  };

  useEffect(() => {
    getTasks();
    props.getClasses();
  }, []);

  // const deleteTask = async (id) => {
  //   try {
  //     const deleteTask = await fetch(`http://localhost:9000/tasks/${id}`, {
  //       method: "DELETE",
  //     });
  //     getTasks();
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  const getTasks = async () => {
    try {
      const response = await fetch("http://localhost:9000/tasks");
      const json = await response.json();
      setTasks(json);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (selectedClass === "all") {
      setFilteredTasks(tasks);
    } else {
      setFilteredTasks(tasks.filter((task) => task.course === selectedClass));
    }
  }, [tasks, selectedClass]);

  return (
    <>
      <div class="grow relative">
        <div class="h-24 pl-12 text-3xl font-semibold flex">
          <div class="mt-12">Tasks</div>
        </div>
        <div class="flex items-center justify-between mb-2 h-12 px-12">
          <div class="flex">
            <select
              name="status"
              class="hover:bg-gray-100 flex rounded-lg items-center p-1 mr-4 w-30 justify-center border border-gray-200"
            >
              <option value="current">Current</option>
              <option value="completed">Completed</option>
            </select>

            <select
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
              name="class"
              class="hover:bg-gray-100 flex rounded-lg items-center p-1 w-30 justify-center border border-gray-200"
            >
              <option value="all">All Classes</option>
              {props.classes.map((clas) => (
                <option value={clas.num}>{clas.num}</option>
              ))}
            </select>
          </div>
          <button
            onClick={addNewTask}
            class="flex bg-gray-200 p-1 rounded-lg items-center w-32 justify-center hover:bg-gray-300"
          >
            + New Task
          </button>
        </div>
        <TaskList getTasks={getTasks} filteredTasks={filteredTasks} />
        {isNewTask && (
          <NewTask
            setIsNewTask={setIsNewTask}
            tasks={tasks}
            setTasks={setTasks}
            selectedClass={selectedClass}
            getTasks={getTasks}
            classes={props.classes}
          />
        )}
      </div>
    </>
  );
};

export default Tasks;

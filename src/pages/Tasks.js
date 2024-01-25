import React, { useState, useEffect } from "react";
import TaskList from "../components/TaskList";
import NewTask from "../components/NewTask";
import EditTask from "../components/EditTask";

const Tasks = (props) => {
  const [isNewTask, setIsNewTask] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [selectedClass, setSelectedClass] = useState("all");
  const [isEditTask, setIsEditTask] = useState(false);
  const [editId, setEditId] = useState(0);

  const addNewTask = () => {
    setIsNewTask(true);
  };

  useEffect(() => {
    getTasks();
    props.getClasses();
  }, []);

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

  const [task, setTask] = useState(null);

  const getTask = async (id) => {
    try {
      const response = await fetch(`http://localhost:9000/tasks/${id}`);
      const json = await response.json();
      setTask(json);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getTask(editId);
  }, [editId]);

  return (
    <>
      <div class="grow relative">
        <div class="h-24 pl-12 text-3xl font-semibold flex">
          <div class="mt-12">Tasks</div>
        </div>
        <div class="flex items-center justify-between mb-2 h-12 px-12">
          <div class="flex">
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
            class="flex bg-gray-300 p-1 rounded-lg items-center w-32 justify-center hover:bg-gray-400"
          >
            + New Task
          </button>
        </div>
        <TaskList
          setIsEditTask={setIsEditTask}
          getTasks={getTasks}
          filteredTasks={filteredTasks}
          setEditId={setEditId}
        />
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
        {isEditTask && (
          <EditTask
            getTasks={getTasks}
            classes={props.classes}
            setIsEditTask={setIsEditTask}
            editId={editId}
            task={task}
          />
        )}
      </div>
    </>
  );
};

export default Tasks;

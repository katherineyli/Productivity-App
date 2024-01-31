import React, { useState, useEffect } from "react";
import TaskList from "../components/TaskList";
import NewTask from "../components/NewTask";
import EditTask from "../components/EditTask";

const Tasks = (props) => {
  const [isNewTask, setIsNewTask] = useState(false);

  const [filteredTasks, setFilteredTasks] = useState([]);
  const [selectedClass, setSelectedClass] = useState("all");
  const [selectedPriority, setSelectedPriority] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [isEditTask, setIsEditTask] = useState(false);
  const [editId, setEditId] = useState(0);

  const addNewTask = () => {
    setIsNewTask(true);
  };

  useEffect(() => {
    props.getTasks();
    props.getClasses();
  }, []);

  useEffect(() => {
    setFilteredTasks(props.tasks);
    if (selectedClass !== "all") {
      setFilteredTasks(
        props.tasks.filter((task) => task.course === selectedClass)
      );
    }
    if (selectedPriority !== "all") {
      setFilteredTasks(
        filteredTasks.filter((task) => task.pri === selectedPriority)
      );
    }
    if (selectedStatus !== "all") {
      const statusToChecked = {
        Completed: true,
        Ongoing: false,
      };
      setFilteredTasks(
        filteredTasks.filter(
          (task) => task.checked === statusToChecked[selectedStatus]
        )
      );
    }
  }, [props.tasks, selectedClass, selectedPriority, selectedStatus]);

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
      <div className="grow relative">
        <div className="h-24 pl-12 text-3xl font-semibold flex">
          <div className="mt-12">Tasks</div>
        </div>
        <div className="flex items-center justify-between mb-2 h-12 px-12">
          <div className="flex">
            <select
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
              className="hover:bg-gray-300 flex rounded-lg items-center p-1 w-30 justify-center shadow-sm bg-gray-200"
            >
              <option value="all">All Classes</option>
              {props.classes.map((clas) => (
                <option value={clas.num}>{clas.num}</option>
              ))}
            </select>
            <select
              value={selectedPriority}
              onChange={(e) => setSelectedPriority(e.target.value)}
              className="hover:bg-gray-300 flex rounded-lg items-center p-1 w-30 justify-center shadow-sm bg-gray-200 ml-3"
            >
              <option value="all">All Priorities</option>
              <option value="High">High</option>
              <option value="Low">Low</option>
              <option value="None">None</option>
            </select>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="hover:bg-gray-300 flex rounded-lg items-center p-1 w-30 justify-center shadow-sm bg-gray-200 ml-3"
            >
              <option value="all">All Statuses</option>
              <option value="Completed">Completed</option>
              <option value="Ongoing">Ongoing</option>
            </select>
          </div>
          <button
            onClick={addNewTask}
            className="flex bg-gray-300 p-1 rounded-lg items-center w-32 justify-center hover:bg-gray-400"
          >
            + New Task
          </button>
        </div>
        <TaskList
          setIsEditTask={setIsEditTask}
          getTasks={props.getTasks}
          filteredTasks={filteredTasks}
          setEditId={setEditId}
          primary={props.primary}
          applyColor={props.applyColor}
        />
        {isNewTask && (
          <NewTask
            setIsNewTask={setIsNewTask}
            tasks={props.tasks}
            setTasks={props.setTasks}
            selectedclassName={selectedClass}
            getTasks={props.getTasks}
            classes={props.classes}
          />
        )}
        {isEditTask && (
          <EditTask
            getTasks={props.getTasks}
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

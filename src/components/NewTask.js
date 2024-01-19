import React, { useState } from "react";

//props: setIsNewTask, tasks, setTasks

const NewTask = (props) => {
  console.log(props);
  const [inputName, setInputName] = useState("");

  const handleInputNameChange = (event) => {
    const value = event.target.value;
    setInputName(value);
  };

  const closeNewTask = () => {
    props.setIsNewTask(false);
  };

  const handleSubmit = () => {
    const newTasksList = props.tasks.concat({
      name: inputName,
    });
    props.setTasks(newTasksList);
    closeNewTask();
  };

  return (
    <div class="bg-white border border-gray-200 flex flex-col z-50 absolute left-1/4 top-1/4 w-1/2 h-1/2 rounded-lg">
      <div class="flex justify-between bg-gray-100 p-4">
        <h1 class="">New Task</h1>
        <button onClick={closeNewTask}>X</button>
      </div>
      <div class="flex-col grow relative mt-2">
        <div class="h-12 flex items-center p-4">
          Name
          <input
            type="text"
            value={inputName}
            onChange={handleInputNameChange}
            class="border border-gray-300 rounded-lg ml-3"
          ></input>
        </div>
        <button
          class="h-12 flex absolute right-4 bottom-4 w-16 h-8 bg-gray-200 rounded-lg p-2 items-center justify-center"
          onClick={handleSubmit}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default NewTask;

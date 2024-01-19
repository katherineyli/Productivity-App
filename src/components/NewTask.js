import React, { useState } from "react";

//props: setIsNewTask, tasks, setTasks

const NewTask = (props) => {
  console.log(props);
  const [inputName, setInputName] = useState("");
  const [inputClass, setInputClass] = useState("");
  const [inputDue, setInputDue] = useState("");

  const handleInputNameChange = (event) => {
    const value = event.target.value;
    setInputName(value);
  };

  const handleInputClassChange = (event) => {
    const value = event.target.value;
    setInputClass(value);
  };

  const handleInputDueChange = (event) => {
    const value = event.target.value;
    setInputDue(value);
  };

  const closeNewTask = () => {
    props.setIsNewTask(false);
  };

  const handleSubmit = () => {
    const newTasksList = props.tasks.concat({
      name: inputName,
      class: inputClass,
      due: inputDue,
    });
    props.setTasks(newTasksList);
    closeNewTask();
  };

  return (
    <div class="bg-white border border-gray-200 flex flex-col z-50 absolute left-1/4 top-1/4 w-1/2 h-1/2 rounded-lg">
      <div class="flex justify-between bg-gray-100 p-4">
        {/* <h1 class="">New Task</h1> */}
        <textarea
          value={inputName}
          onChange={handleInputNameChange}
          class="flex items-center focus: h-8 w-full bg-transparent resize-none text-xl outline-none"
          placeholder="Untitled"
        ></textarea>
        <button onClick={closeNewTask}>X</button>
      </div>
      <div class="flex-col grow relative mt-2">
        <div class="h-12 flex items-center p-4">
          Class
          <input
            type="text"
            value={inputClass}
            onChange={handleInputClassChange}
            class="p-1 border border-gray-300 rounded-lg ml-3"
          ></input>
        </div>
        <div class="h-12 flex items-center p-4">
          Due
          <input
            type="text"
            value={inputDue}
            onChange={handleInputDueChange}
            class="p-1 border border-gray-300 rounded-lg ml-3"
          ></input>
        </div>
        <button
          class="flex absolute right-4 bottom-4 px-6 py-1 bg-gray-200 rounded-lg items-center justify-center"
          onClick={handleSubmit}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default NewTask;

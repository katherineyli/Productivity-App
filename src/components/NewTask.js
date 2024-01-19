import React, { useState } from "react";

//props: setIsNewTask, tasks, setTasks, count, setCount, allTasks, setAllTasks, selectedClass

const NewTask = (props) => {
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
    const newAllTasksList = props.allTasks.concat({
      name: inputName,
      class: inputClass,
      due: inputDue,
      id: props.count,
    });
    props.setAllTasks(newAllTasksList);
    if (props.selectedClass === "all" || inputClass === props.selectedClass) {
      console.log("all");
      const newTasksList = props.tasks.concat({
        name: inputName,
        class: inputClass,
        due: inputDue,
        id: props.count,
      });
      props.setTasks(newTasksList);
    }
    props.setCount(props.count + 1);
    closeNewTask();
  };

  return (
    <div class="bg-white border border-gray-200 flex flex-col z-50 absolute left-1/4 top-1/4 w-1/2 h-1/2 rounded-lg">
      <div class="flex justify-between bg-gray-100 p-4">
        <textarea
          value={inputName}
          onChange={handleInputNameChange}
          class="flex items-center focus: h-8 w-full bg-transparent resize-none text-xl outline-none"
          placeholder="Untitled"
        ></textarea>
        <button
          class="hover:bg-gray-300 px-3 rounded-lg"
          onClick={closeNewTask}
        >
          X
        </button>
      </div>
      <div class="flex-col grow relative mt-2">
        {/* <div class="h-12 flex items-center p-4">
          Class
          <input
            type="text"
            value={inputClass}
            onChange={handleInputClassChange}
            class="p-1 px-2 border border-gray-300 rounded-lg ml-3"
          ></input>
        </div> */}
        <div class="h-12 flex items-center p-4">
          Class
          <select
            value={inputClass}
            onChange={handleInputClassChange}
            class="w-36 p-1 px-2 border border-gray-300 rounded-lg ml-3"
          >
            <option value=""></option>
            <option value="6.9620">6.9620</option>
            <option value="6.S191">6.S191</option>
          </select>
        </div>
        <div class="h-12 flex items-center p-4">
          Due
          <input
            type="date"
            value={inputDue}
            onChange={handleInputDueChange}
            class="p-1 px-2 border border-gray-300 rounded-lg ml-3"
          ></input>
        </div>
        <button
          class="flex absolute right-4 bottom-4 px-6 py-1 bg-gray-200 rounded-lg items-center justify-center hover:bg-gray-300"
          onClick={handleSubmit}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default NewTask;

import React, { useState } from "react";

//props: setIsNewTask, tasks, setTasks, count, setCount, allTasks, setAllTasks, selectedClass

const NewTask = (props) => {
  const [inputName, setInputName] = useState("");
  const [inputClass, setInputClass] = useState("");
  const [inputDue, setInputDue] = useState("");
  const [inputPriority, setInputPriority] = useState("");
  const [inputReminder, setInputReminder] = useState("");

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

  const handleInputPriorityChange = (event) => {
    const value = event.target.value;
    setInputPriority(value);
  };

  const handleInputReminderChange = (event) => {
    const value = event.target.value;
    setInputReminder(value);
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
      <div class="flex justify-between bg-gray-100 p-4 rounded-t-lg">
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
        <div class="h-12 flex items-center p-4">
          Class
          <select
            value={inputClass}
            onChange={handleInputClassChange}
            class="hover:bg-gray-100 w-36 p-1 px-2 border border-gray-300 rounded-lg ml-3"
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
            class="hover:bg-gray-100 p-1 px-2 border border-gray-300 rounded-lg ml-3"
          ></input>
        </div>
        <div class="h-12 flex items-center p-4">
          Priority
          <select
            value={inputPriority}
            onChange={handleInputPriorityChange}
            class="hover:bg-gray-100 w-36 p-1 px-2 border border-gray-300 rounded-lg ml-3"
          >
            <option value="none">None</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>
        <div class="h-12 flex items-center p-4">
          Reminder
          <select
            value={inputReminder}
            onChange={handleInputReminderChange}
            class="hover:bg-gray-100 w-36 p-1 px-2 border border-gray-300 rounded-lg ml-3"
          >
            <option value="none">None</option>
            <option value="half">30 min before</option>
            <option value="hour">1 hour before</option>
            <option value="day">1 day before</option>
          </select>
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

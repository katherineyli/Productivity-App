import React from "react";

const NewTask = (props) => {
  const closeNewTask = () => {
    props.setIsNewTask(false);
  };
  return (
    <div class="bg-white border border-gray-200 flex flex-col z-50 absolute left-1/4 top-1/4 w-1/2 h-1/2 rounded-lg">
      <div class="flex justify-between bg-gray-100 p-4">
        <h1 class="">New Task</h1>
        <button onClick={closeNewTask}>X</button>
      </div>
      <div class="flex-col grow">
        <div class="h-12 flex items-center p-4">
          <label for="name" class="mr-4">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            class="border border-gray-300 rounded-lg"
          ></input>
        </div>
        <div class="h-12 flex items-center p-4">
          <label for="class" class="mr-4">
            Class
          </label>
          <input
            type="text"
            name="class"
            id="class"
            class="border border-gray-300 rounded-lg"
          ></input>
        </div>
      </div>
    </div>
  );
};

export default NewTask;

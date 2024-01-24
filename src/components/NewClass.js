import React, { useState } from "react";
import NewTime from "./NewTime";

//props: setIsNewClass

const NewClass = (props) => {
  const [name, setName] = useState("");
  const [term, setTerm] = useState("");
  const [showNewTime, setShowNewTime] = useState(false);

  const closeNewTask = () => {
    props.setIsNewClass(false);
  };

  const toggleNewTime = () => {
    setShowNewTime(!showNewTime);
  };

  return (
    <div class="bg-white border border-gray-200 flex flex-col z-50 absolute left-1/4 top-1/4 w-1/2 h-2/3 rounded-lg">
      <div class="flex justify-between bg-gray-100 p-4 rounded-t-lg">
        <textarea
          value={name}
          onChange={(e) => setName(e.target.value)}
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
      <div class="h-12 flex items-center p-4 ml-1 mt-2">
        Term
        <select
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          class="hover:bg-gray-100 w-full p-1 px-2 border border-gray-300 rounded-lg mx-3"
        >
          <option value="Fall">Fall</option>
          <option value="Winter">Winter</option>
          <option value="Spring">Spring</option>
        </select>
      </div>
      <div class="h-12 ml-1 flex items-center p-4">
        Location
        <input class="w-full mx-3 p-1 px-2 border border-gray-300 rounded-lg"></input>
      </div>
      <div class="h-12 ml-1 flex items-center p-4">
        Instructor
        <input class="w-full p-1 px-2 border border-gray-300 rounded-lg mx-3"></input>
      </div>
      <div class="flex mb-1">
        <div class="h-12 ml-5 flex items-center basis-1/2">
          Start Date
          <input
            type="date"
            class="w-36 p-1 px-2 border border-gray-300 rounded-lg ml-3"
          ></input>
        </div>
        <div class="h-12 flex items-center basis-1/2">
          End Date
          <input
            type="date"
            class="w-36 p-1 px-2 border border-gray-300 rounded-lg ml-3"
          ></input>
        </div>
      </div>
      <div class="h-12 ml-1 flex-col items-center py-1 px-4">
        Times
        <button
          onClick={toggleNewTime}
          class="hover:bg-gray-300 bg-gray-200 w-24 p-1 rounded-lg ml-4"
        >
          {showNewTime ? "Close" : "New Time"}
        </button>
        <div class="flex mt-3">
          {showNewTime && <NewTime />}
          <div class="flex-col overflow-auto rounded-lg w-80 h-44">
            <div class="bg-gray-100 rounded-lg p-2 mb-1">Time 1</div>
            <div class="bg-gray-100 rounded-lg p-2 mb-1">Time 1</div>
            <div class="bg-gray-100 rounded-lg p-2 mb-1">Time 1</div>
            <div class="bg-gray-100 rounded-lg p-2 mb-1">Time 1</div>
            <div class="bg-gray-100 rounded-lg p-2 mb-1">Time 1</div>
          </div>
        </div>
      </div>
      <button class="flex absolute right-4 bottom-4 px-6 py-1 bg-gray-200 rounded-lg items-center justify-center hover:bg-gray-300">
        Add
      </button>
    </div>
  );
};

export default NewClass;

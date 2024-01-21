import React, { useState } from "react";
import NewTime from "./NewTime";

//props: setIsNewClass

const NewClass = (props) => {
  const [inputName, setInputName] = useState("");
  const [inputTerm, setInputTerm] = useState("");
  const [showNewTime, setShowNewTime] = useState(false);

  const handleInputNameChange = (event) => {
    const value = event.target.value;
    setInputName(value);
  };

  const handleInputTermChange = (event) => {
    const value = event.target.value;
    setInputTerm(value);
  };

  const closeNewTask = () => {
    props.setIsNewClass(false);
  };

  const toggleNewTime = () => {
    setShowNewTime(!showNewTime);
  };

  return (
    <div class="bg-white border border-gray-200 flex flex-col z-50 absolute left-1/4 top-1/6 w-1/2 h-2/3 rounded-lg">
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
      <div class="flex">
        <div>
          <div class="h-12 flex items-center p-4 mt-2">
            Term
            <select
              value={inputTerm}
              onChange={handleInputTermChange}
              class="hover:bg-gray-100 w-36 p-1 px-2 border border-gray-300 rounded-lg ml-3"
            >
              <option value="fall">Fall</option>
              <option value="winter">Winter</option>
              <option value="spring">Spring</option>
            </select>
          </div>
          <div class="h-12 flex items-center p-4">
            Location
            <input class="w-36 p-1 px-2 border border-gray-300 rounded-lg ml-3"></input>
          </div>
          <div class="h-12 flex items-center p-4">
            Instructor
            <input class="w-36 p-1 px-2 border border-gray-300 rounded-lg ml-3"></input>
          </div>
          <div class="flex">
            <div class="h-12 flex items-center p-4">
              Start Date
              <input
                type="date"
                class="w-36 p-1 px-2 border border-gray-300 rounded-lg ml-3"
              ></input>
            </div>
            <div class="h-12 flex items-center p-4">
              End Date
              <input
                type="date"
                class="w-36 p-1 px-2 border border-gray-300 rounded-lg ml-3"
              ></input>
            </div>
          </div>
          <div class="h-12 flex-col items-center py-1 px-4">
            Times
            <button
              onClick={toggleNewTime}
              class="hover:bg-gray-300 bg-gray-200 w-24 p-1 rounded-lg ml-4"
            >
              {showNewTime ? "Close": "New Time"}
            </button>
            <div class="flex mt-3">
              {showNewTime && <NewTime />}
              <div class="flex-col overflow-auto rounded-lg w-80 h-44">
                {/* <div class="bg-gray-100 rounded-lg p-2 mb-1">Time 1</div>
                <div class="bg-gray-100 rounded-lg p-2 mb-1">Time 1</div>
                <div class="bg-gray-100 rounded-lg p-2 mb-1">Time 1</div>
                <div class="bg-gray-100 rounded-lg p-2 mb-1">Time 1</div>
                <div class="bg-gray-100 rounded-lg p-2 mb-1">Time 1</div> */}
              </div>
            </div>
          </div>
        </div>
        <button class="flex absolute right-4 bottom-4 px-6 py-1 bg-gray-200 rounded-lg items-center justify-center hover:bg-gray-300">
          Add
        </button>
      </div>
    </div>
  );
};

export default NewClass;

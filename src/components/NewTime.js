import React from "react";

const NewTime = () => {
  return (
    <div class="bg-gray-100 w-68 h-44 rounded-lg flex-col relative mr-4">
      <div class="flex py-2 mb-1">
        <h1 class="ml-3 basis-1/4 mr-5">Days</h1>
        <div class="flex justify-between ml-2 mr-4 basis-3/4">
          <div class="flex mr-2">
            M
            <input type="checkbox" class="ml-1" />
          </div>
          <div class="flex mr-2">
            T
            <input type="checkbox" class="ml-1" />
          </div>
          <div class="flex mr-2">
            W
            <input type="checkbox" class="ml-1" />
          </div>
          <div class="flex mr-2">
            R
            <input type="checkbox" class="ml-1" />
          </div>
          <div class="flex">
            F
            <input type="checkbox" class="ml-1" />
          </div>
        </div>
      </div>
      <div class="flex items-center mb-3">
        <h1 class="ml-3 basis-1/4">Start</h1>
        <input type="time" class="basis-3/4 ml-2 mr-4 p-0.5 rounded-lg"></input>
      </div>
      <div class="flex items-center">
        <h1 class="ml-3 basis-1/4">End</h1>
        <input type="time" class="basis-3/4 ml-2 mr-4 p-0.5 rounded-lg"></input>
      </div>
      <button class="bg-gray-200 hover:bg-gray-300 absolute right-4 bottom-3.5 px-2 py-1 rounded-lg">Add Time</button>
    </div>
  );
};

export default NewTime;

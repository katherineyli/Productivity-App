import React from "react";
import Timer from "../components/Timer";

const Pomodoro = () => {
  return (
    <div class="grow relative flex-col">
      <h1 class="ml-4 bg-white h-24 items-center pl-8 text-3xl font-semibold flex">
        Pomodoro
      </h1>
      <div class="bg-white border border-gray-200 flex flex-col z-50 absolute left-1/4 top-1/4 w-1/2 h-1/2 rounded-lg">
        <div class="h-16 bg-gray-300 rounded-t-lg flex justify-center items-center">
          <button class="bg-white w-24 h-8 mx-2 rounded-lg">Pomodoro</button>
          <button class="bg-white w-24 h-8 mx-2 rounded-lg">Pomodoro</button>
          <button class="bg-white w-24 h-8 mx-2 rounded-lg">Pomodoro</button>
        </div>
        <Timer />
      </div>
    </div>
  );
};

export default Pomodoro;

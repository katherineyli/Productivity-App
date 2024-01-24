import React from "react";
import Timer from "../components/Timer";

const Pomodoro = () => {
  return (
    <div class="grow flex flex-col h-screen">
      <div class="h-24 pl-12 text-3xl font-semibold flex">
        <div class="mt-12">Pomodoro</div>
      </div>
      <div class="grow relative">
        <Timer/>
      </div>
    </div>
  );
};

export default Pomodoro;

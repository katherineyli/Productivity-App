import React from "react";
import Timer from "../components/Timer";

const Pomodoro = () => {
  return (
    <div className="grow flex flex-col h-screen">
      <div className="h-24 pl-12 text-3xl font-semibold flex">
        <div className="mt-12">Pomodoro</div>
      </div>
      <div className="grow relative">
        <Timer/>
      </div>
    </div>
  );
};

export default Pomodoro;

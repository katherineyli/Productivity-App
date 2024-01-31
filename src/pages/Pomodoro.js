import React, { useState } from "react";
import Timer from "../components/Timer";

const Pomodoro = () => {
  const [pomodoroTime, setPomodoroTime] = useState(1500);
  const [shortTime, setShortTime] = useState(300);
  const [longTime, setLongTime] = useState(600);
  const [toggleTimes, setToggleTimes] = useState(false);
  const [isSettings, setIsSettings] = useState(false);

  return (
    <div className="grow flex flex-col h-screen">
      <div className="h-24 pl-12 text-3xl font-semibold flex">
        <div className="mt-12">Pomodoro</div>
      </div>
      <div className="grow relative bg-red-100 flex justify-end">
        <div
          className={`w-52 h-full bg-red-200 flex flex-col p-4 relative ${
            isSettings ? "translate-x-0 duration-300 ease-in-out" : "translate-x-52 duration-300 ease-in-out"
          }`}
        >
          <button
            onClick={() => setIsSettings(!isSettings)}
            className="absolute right-40 top-1/3 w-32 h-8 flex items-center justify-center rounded-t-lg -rotate-90 bg-red-300 hover:bg-red-400"
          >
            Show Settings
          </button>
          <h1 className="font-bold text-2xl mb-2">Timer Settings</h1>
          <h1 className="text-lg">Work</h1>
          <span>
            <input
              type="number"
              min="1"
              max="90"
              className="ml-3 h-8 w-28 border border-gray-300 rounded-lg mb-2 mr-2 pl-2"
              value={pomodoroTime / 60}
              onChange={(e) => setPomodoroTime(e.target.value * 60)}
            ></input>
            min
          </span>
          <h1 className="text-lg">Short Break</h1>
          <span>
            <input
              type="number"
              min="1"
              max="30"
              className="ml-3 h-8 w-28 border border-gray-300 rounded-lg mb-2 mr-2 pl-2"
              value={shortTime / 60}
              onChange={(e) => setShortTime(e.target.value * 60)}
            ></input>
            min
          </span>
          <h1 className="text-lg">Long Break</h1>
          <span>
            <input
              type="number"
              min="1"
              max="90"
              className="ml-3 h-8 w-28 border border-gray-300 rounded-lg mb-6 mr-2 pl-2"
              value={longTime / 60}
              onChange={(e) => setLongTime(e.target.value * 60)}
            ></input>
            min
          </span>
          <div className="flex justify-center">
            <button
              className="bg-gray-200 rounded-lg w-24 h-10 hover:bg-gray-300 text-lg"
              onClick={() => setToggleTimes(!toggleTimes)}
            >
              Save
            </button>
          </div>
        </div>
        <Timer
          pomodoroTime={pomodoroTime}
          shortTime={shortTime}
          longTime={longTime}
          toggleTimes={toggleTimes}
        />
      </div>
    </div>
  );
};

export default Pomodoro;

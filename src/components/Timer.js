import React, { useState, useEffect } from "react";

const Timer = () => {
  const INITIALTIME = 1500;
  const SHORTBREAKTIME = 300;
  const LONGBREAKTIME = 600;

  const [seconds, setSeconds] = useState(INITIALTIME);
  const [active, setActive] = useState(false);

  const toggleTimer = () => {
    setActive(!active);
  };

  const resetTimer = () => {
    setActive(false);
    setSeconds(INITIALTIME);
  };

  const displaySeconds = (sec) => {
    const secMod = sec % 60;
    return secMod >= 10 ? secMod : "0" + secMod;
  };

  const displayMinutes = (sec) => {
    const min = Math.floor(sec / 60);
    return min >= 10 ? min : "0" + min;
  };

  useEffect(() => {
    if (active && seconds >= 0) {
      const interval = setInterval(() => setSeconds(seconds - 1), 1000);

      return () => clearInterval(interval);
    } else if (seconds < 0) {
      setActive(false);
      setSeconds(INITIALTIME);
    }
  });

  const shortBreak = () => {
    setActive(false);
    setSeconds(SHORTBREAKTIME);
  };

  const longBreak = () => {
    setActive(false);
    setSeconds(LONGBREAKTIME);
  };

  return (
    <div class="absolute w-1/3 h-1/3 top-1/4 left-1/3 rounded-lg bg-red-200 flex flex-col">
      <div class="h-12 flex items-center justify-center">
        <button
          onClick={resetTimer}
          class="bg-red-300 hover:bg-red-400 w-24 h-8 rounded-lg mx-1"
        >
          Work
        </button>
        <button
          onClick={shortBreak}
          class="bg-red-300 hover:bg-red-400 px-2 h-8 rounded-lg mx-1"
        >
          Short break
        </button>
        <button
          onClick={longBreak}
          class="bg-red-300 hover:bg-red-400 px-2 h-8 rounded-lg mx-1"
        >
          Long break
        </button>
      </div>
      <div class="h-36 bg-red-300 rounded-lg flex items-center justify-center text-8xl">
        {`${displayMinutes(seconds)}:${displaySeconds(seconds)}`}
      </div>
      <div class="grow bg-yellow-100 rounded-lg flex items-center justify-center">
        <button
          onClick={toggleTimer}
          class="bg-yellow-200 w-16 rounded-lg py-1 mr-1"
        >
          {active ? "Pause" : "Start"}
        </button>
        <button
          class="bg-yellow-200 w-16 rounded-lg py-1 ml-1"
          onClick={resetTimer}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;

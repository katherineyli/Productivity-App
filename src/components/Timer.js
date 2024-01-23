import React, { useState, useEffect } from "react";

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState(1500);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        setTimeLeft((timeLeft) => timeLeft - 1);
      }, 1000);
    } else if (!isActive && timeLeft !== 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, timeLeft]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const secondsToString = (seconds) => {
    let minutesLeft = Math.floor(timeLeft / 60);
    let secondsLeft = timeLeft % 60;
    return `${minutesLeft < 10 ? "0" : ""}${minutesLeft}:${
      secondsLeft < 10 ? "0" : ""
    }${secondsLeft}`;
  };

  return (
    <div class="absolute w-1/3 h-1/3 top-1/4 left-1/3 rounded-lg bg-red-200 flex flex-col">
      <div class="h-12 flex items-center justify-center">
        <button class="bg-red-300 hover:bg-red-400 w-24 rounded-lg mx-2">
          Work
        </button>
        <button class="bg-red-300 hover:bg-red-400 px-2 rounded-lg mx-2">
          Short break
        </button>
        <button class="bg-red-300 hover:bg-red-400 px-2 rounded-lg mx-2">
          Long break
        </button>
      </div>
      <div class="h-36 bg-red-300 rounded-lg flex items-center justify-center text-8xl">
        {secondsToString(timeLeft)}
      </div>
      <div class="grow bg-yellow-100 rounded-lg flex items-center justify-center">
        <button
          onClick={toggleTimer}
          class="bg-yellow-200 w-16 rounded-lg py-1 mr-1"
        >
          {isActive ? "Pause" : "Start"}
        </button>
        <button class="bg-yellow-200 w-16 rounded-lg py-1 ml-1">Stop</button>
      </div>
    </div>
  );
};

export default Timer;

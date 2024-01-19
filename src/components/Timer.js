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
    <div class="flex-col grow items-center justify-center text-8xl">
      <div>{secondsToString(timeLeft)}</div>
      <button
        onClick={toggleTimer}
        class="flex bg-gray-300 rounded-lg px-12 py-4 mb-8"
      >
        {isActive ? "Pause" : "Start"}
      </button>
    </div>
  );
};

export default Timer;

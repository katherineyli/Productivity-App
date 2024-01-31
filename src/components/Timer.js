import React, { useState, useEffect } from "react";

const Timer = (props) => {
  const [timerType, setTimerType] = useState("Pomodoro");
  const [seconds, setSeconds] = useState(props.pomodoroTime);
  const [active, setActive] = useState(false);

  const toggleTimer = () => {
    setActive(!active);
  };

  const resetTimer = () => {
    setActive(false);
    if (timerType === "Pomodoro") {
      setSeconds(props.pomodoroTime);
    } else if (timerType === "Short") {
      setSeconds(props.shortTime);
    } else {
      setSeconds(props.longTime);
    }
  };

  useEffect(() => {
    if (timerType === "Pomodoro") {
      setSeconds(props.pomodoroTime);
    } else if (timerType === "Short") {
      setSeconds(props.shortTime);
    } else {
      setSeconds(props.longTime);
    }
  }, [props.toggleTimes]);

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
      if (timerType === "Pomodoro") {
        setSeconds(props.pomodoroTime);
      } else if (timerType === "Short") {
        setSeconds(props.shortTime);
      } else {
        setSeconds(props.longTime);
      }
    }
  });

  const shortBreak = () => {
    setActive(false);
    setTimerType("Short");
    setSeconds(props.shortTime);
  };

  const longBreak = () => {
    setActive(false);
    setTimerType("Long");
    setSeconds(props.longTime);
  };

  const pomodoroTimer = () => {
    setActive(false);
    setTimerType("Pomodoro");
    setSeconds(props.pomodoroTime);
  };

  return (
    <div className="absolute shadow-md w-1/3 h-1/3 top-1/4 left-1/3 rounded-lg bg-gray-200 flex flex-col">
      <div className="h-12 flex items-center justify-center">
        <button
          onClick={pomodoroTimer}
          className="bg-gray-300 hover:bg-gray-400 w-1/3 h-full rounded-tl-lg"
        >
          Work
        </button>
        <button
          onClick={shortBreak}
          className="bg-gray-300 hover:bg-gray-400 w-1/3 h-full"
        >
          Short break
        </button>
        <button
          onClick={longBreak}
          className="bg-gray-300 hover:bg-gray-400 w-1/3 h-full rounded-tr-lg"
        >
          Long break
        </button>
      </div>
      <div className="h-36 rounded-lg flex items-center justify-center text-8xl">
        {`${displayMinutes(seconds)}:${displaySeconds(seconds)}`}
      </div>
      <div className="grow rounded-lg flex items-center justify-center h-12">
        <button
          onClick={toggleTimer}
          className="bg-gray-300 hover:bg-gray-400 w-1/2 h-full rounded-bl-lg"
        >
          {active ? "Pause" : "Start"}
        </button>
        <button
          className="bg-gray-300 hover:bg-gray-400 w-1/2 h-full rounded-br-lg"
          onClick={resetTimer}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;

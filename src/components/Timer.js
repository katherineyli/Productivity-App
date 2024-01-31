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
        alert("Session complete! Take a break, you've earned it :)");
        setSeconds(props.pomodoroTime);
      } else if (timerType === "Short") {
        alert(
          "Short break concluded! Let's harness that renewed energy for another focused session."
        );
        setSeconds(props.shortTime);
      } else {
        alert("Long break's over! Time to bring your A-game again!");
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
    <div
      className={`absolute shadow-lg w-1/3 h-1/3 top-1/3 left-1/3 rounded-lg ${props.applyColor(
        props.primary,
        200
      )} flex flex-col border ${props.applyColor(props.primary, 300, true)}`}
    >
      <div className="h-12 flex items-center justify-center">
        <button
          onClick={pomodoroTimer}
          className={`${props.applyColor(
            props.primary,
            300
          )} hover:${props.applyColor(
            props.primary,
            400
          )} w-1/3 h-full rounded-tl-lg `}
        >
          Work
        </button>
        <button
          onClick={shortBreak}
          className={`${props.applyColor(
            props.primary,
            300
          )} hover:${props.applyColor(props.primary, 400)} w-1/3 h-full`}
        >
          Short break
        </button>
        <button
          onClick={longBreak}
          className={`${props.applyColor(
            props.primary,
            300
          )} hover:${props.applyColor(
            props.primary,
            400
          )} w-1/3 h-full rounded-tr-lg"]`}
        >
          Long break
        </button>
      </div>
      <div className="h-36 rounded-lg flex items-center justify-center text-8xl mt-2">
        {`${displayMinutes(seconds)}:${displaySeconds(seconds)}`}
      </div>
      <div className="grow rounded-lg flex items-center justify-center relative h-12">
        <button
          onClick={toggleTimer}
          className={`${props.applyColor(
            props.primary,
            300
          )} hover:${props.applyColor(
            props.primary,
            400
          )} w-1/2 h-16 absolute bottom-0 left-0 rounded-bl-lg`}
        >
          {active ? "Pause" : "Start"}
        </button>
        <button
          className={`${props.applyColor(
            props.primary,
            300
          )} hover:${props.applyColor(
            props.primary,
            400
          )} w-1/2 h-16 absolute bottom-0 right-0 rounded-br-lg`}
          onClick={resetTimer}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;

import React, { useState } from "react";

const NewTime = (props) => {
  const [mon, setMon] = useState(false);
  const [tue, setTue] = useState(false);
  const [wed, setWed] = useState(false);
  const [thu, setThu] = useState(false);
  const [fri, setFri] = useState(false);
  const [start, setStart] = useState("00:00");
  const [end, setEnd] = useState("00:00");

  const boolChar = {
    true: "T",
    false: "F",
  };

  const handleSubmit = () => {
    console.log([mon, tue, wed, thu, fri, start, end]);
    const newTimeString =
      boolChar[mon] +
      boolChar[tue] +
      boolChar[wed] +
      boolChar[thu] +
      boolChar[fri] +
      start +
      "-" +
      end;
    props.setTimes([...props.times, newTimeString]);
    props.closeNewTime();
  };

  return (
    <div class="bg-gray-100 shadow-md w-68 h-44 rounded-lg flex-col relative mr-4">
      <div class="flex py-2 mb-1">
        <h1 class="ml-3 basis-1/4 mr-5">Days</h1>
        <div class="flex justify-between ml-2 mr-4 basis-3/4">
          <div class="flex mr-2">
            M
            <input type="checkbox" class="ml-1" onChange={() => setMon(!mon)} />
          </div>
          <div class="flex mr-2">
            T
            <input type="checkbox" class="ml-1" onChange={() => setTue(!tue)} />
          </div>
          <div class="flex mr-2">
            W
            <input type="checkbox" class="ml-1" onChange={() => setWed(!wed)} />
          </div>
          <div class="flex mr-2">
            R
            <input type="checkbox" class="ml-1" onChange={() => setThu(!thu)} />
          </div>
          <div class="flex">
            F
            <input type="checkbox" class="ml-1" onChange={() => setFri(!fri)} />
          </div>
        </div>
      </div>
      <div class="flex items-center mb-3">
        <h1 class="ml-3 basis-1/4">Start</h1>
        <input
          type="time"
          onChange={(e) => setStart(e.target.value)}
          class="basis-3/4 ml-2 mr-4 p-0.5 rounded-lg"
        ></input>
      </div>
      <div class="flex items-center">
        <h1 class="ml-3 basis-1/4">End</h1>
        <input
          type="time"
          onChange={(e) => setEnd(e.target.value)}
          class="basis-3/4 ml-2 mr-4 p-0.5 rounded-lg"
        ></input>
      </div>
      <button
        onClick={handleSubmit}
        class="bg-gray-200 hover:bg-gray-300 absolute right-4 bottom-3.5 px-2 py-1 rounded-lg"
      >
        Add Time
      </button>
    </div>
  );
};

export default NewTime;

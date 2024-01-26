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
    <div className="bg-gray-100 shadow-md w-68 h-44 rounded-lg flex-col relative mr-4">
      <div className="flex py-2 mb-1">
        <h1 className="ml-3 basis-1/4 mr-5">Days</h1>
        <div className="flex justify-between ml-2 mr-4 basis-3/4">
          <div className="flex mr-2">
            M
            <input type="checkbox" className="ml-1" onChange={() => setMon(!mon)} />
          </div>
          <div className="flex mr-2">
            T
            <input type="checkbox" className="ml-1" onChange={() => setTue(!tue)} />
          </div>
          <div className="flex mr-2">
            W
            <input type="checkbox" className="ml-1" onChange={() => setWed(!wed)} />
          </div>
          <div className="flex mr-2">
            R
            <input type="checkbox" className="ml-1" onChange={() => setThu(!thu)} />
          </div>
          <div className="flex">
            F
            <input type="checkbox" className="ml-1" onChange={() => setFri(!fri)} />
          </div>
        </div>
      </div>
      <div className="flex items-center mb-3">
        <h1 className="ml-3 basis-1/4">Start</h1>
        <input
          type="time"
          onChange={(e) => setStart(e.target.value)}
          className="basis-3/4 ml-2 mr-4 p-0.5 rounded-lg"
        ></input>
      </div>
      <div className="flex items-center">
        <h1 className="ml-3 basis-1/4">End</h1>
        <input
          type="time"
          onChange={(e) => setEnd(e.target.value)}
          className="basis-3/4 ml-2 mr-4 p-0.5 rounded-lg"
        ></input>
      </div>
      <button
        onClick={handleSubmit}
        className="bg-gray-200 hover:bg-gray-300 absolute right-4 bottom-3.5 px-2 py-1 rounded-lg"
      >
        Add Time
      </button>
    </div>
  );
};

export default NewTime;

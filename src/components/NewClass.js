import React, { useState } from "react";
import NewTime from "./NewTime";
import TimeItem from "./TimeItem";

//props: setIsNewClass

const NewClass = (props) => {
  const [num, setNum] = useState("");
  const [name, setName] = useState("");
  const [term, setTerm] = useState("");
  const [location, setLocation] = useState("");
  const [instructor, setInstructor] = useState("");
  const [showNewTime, setShowNewTime] = useState(false);
  const [validNum, setValidNum] = useState(true);
  const [validName, setValidName] = useState(true);
  const [startDate, setStartDate] = useState(
    new Date().toISOString().slice(0, 10)
  );
  const [endDate, setEndDate] = useState(new Date().toISOString().slice(0, 10));
  const [times, setTimes] = useState([]);

  const closeNewClass = () => {
    props.setIsNewClass(false);
  };

  const toggleNewTime = () => {
    setShowNewTime(!showNewTime);
  };

  const closeNewTime = () => {
    setShowNewTime(false);
  };

  const handleSubmit = async () => {
    try {
      num ? setValidNum(true) : setValidNum(false);
      name ? setValidName(true) : setValidName(false);
      if (!num || !name) {
        return;
      }
      const body = {
        name,
        term,
        location,
        instructor,
        startDate,
        endDate,
        num,
        times,
      };
      const response = await fetch("http://localhost:9000/classes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      console.log(response);
      props.getClasses();
      closeNewClass();
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="bg-white border shadow-md border-gray-200 flex flex-col z-50 absolute left-1/4 top-36 w-1/2 h-3/4 rounded-lg">
      <div className="flex justify-between bg-gray-100 p-4 rounded-t-lg">
        <textarea
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={`flex items-center focus: h-8 w-full bg-transparent resize-none text-xl outline-none ${
            validName ? "" : "border border-red-600 rounded-lg px-2"
          }`}
          placeholder="Untitled"
        ></textarea>
        <button
          className="hover:bg-gray-300 px-3 rounded-lg"
          onClick={closeNewClass}
        >
          X
        </button>
      </div>
      <div className="h-12 ml-1 flex items-center p-4 mt-2">
        <p className="w-40">Course Number</p>
        <input
          value={num}
          onChange={(e) => setNum(e.target.value)}
          className={`w-full mr-3 p-1 px-2 border border-gray-300 rounded-lg ${
            validNum ? "" : "border border-red-600"
          }`}
        ></input>
      </div>
      <div className="h-12 flex items-center p-4 ml-1">
        Term
        <select
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          className="hover:bg-gray-100 w-full p-1 px-2 border border-gray-300 rounded-lg mx-3"
        >
          <option value=""></option>
          <option value="Fall">Fall</option>
          <option value="Winter">Winter</option>
          <option value="Spring">Spring</option>
        </select>
      </div>
      <div className="h-12 ml-1 flex items-center p-4">
        Location
        <input
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full mx-3 p-1 px-2 border border-gray-300 rounded-lg"
        ></input>
      </div>
      <div className="h-12 ml-1 flex items-center p-4">
        Instructor
        <input
          value={instructor}
          onChange={(e) => setInstructor(e.target.value)}
          className="w-full p-1 px-2 border border-gray-300 rounded-lg mx-3"
        ></input>
      </div>
      <div className="flex mb-1">
        <div className="h-12 ml-5 flex items-center basis-1/2">
          Start Date
          <input
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            type="date"
            className="w-36 p-1 px-2 border border-gray-300 rounded-lg ml-3"
          ></input>
        </div>
        <div className="h-12 flex items-center basis-1/2">
          End Date
          <input
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            type="date"
            className="w-36 p-1 px-2 border border-gray-300 rounded-lg ml-3"
          ></input>
        </div>
      </div>
      <div className="h-12 ml-1 flex-col items-center py-1 px-4">
        Times
        <button
          onClick={toggleNewTime}
          className="hover:bg-gray-300 bg-gray-200 w-24 p-1 rounded-lg ml-4"
        >
          {showNewTime ? "Close" : "New Time"}
        </button>
        <div className="flex mt-3">
          {showNewTime && (
            <NewTime
              times={times}
              setTimes={setTimes}
              closeNewTime={closeNewTime}
            />
          )}
          <div className="flex-col overflow-auto rounded-lg w-80 h-44">
            {times.map((time) => (
              <TimeItem time={time} />
            ))}
          </div>
        </div>
      </div>
      <button
        onClick={handleSubmit}
        className="flex absolute right-4 bottom-4 px-6 py-1 bg-gray-200 rounded-lg items-center justify-center hover:bg-gray-300"
      >
        Add
      </button>
    </div>
  );
};

export default NewClass;

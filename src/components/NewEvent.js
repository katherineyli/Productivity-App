import React, { useState } from "react";

const NewEvent = (props) => {
  const [name, setName] = useState("");
  const [validName, setValidName] = useState(true);
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [start, setStart] = useState("00:00");
  const [end, setEnd] = useState("00:00");
  const [allDay, setAllDay] = useState(false);

  const closeNewEvent = () => {
    props.setIsNewEvent(false);
  };

  const handleSubmit = async () => {
    try {
      const body = { name, date, start, end, allDay };
      const response = await fetch("http://localhost:9000/events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      console.log(response);
      props.getEvents();
      closeNewEvent();
    } catch (err) {
      console.error(err.message);
    }
  };

  const renderTimes = () => {
    return (
      <>
        <div className="flex items-center ml-5">
          <h1 className="">Start Time</h1>
          <input
            type="time"
            onChange={(e) => setStart(e.target.value)}
            className="ml-2 p-0.5 rounded-lg border border-gray-300 hover:bg-gray-100"
          ></input>
        </div>
        <div className="flex items-center ml-5">
          <h1 className="">End Time</h1>
          <input
            type="time"
            onChange={(e) => setEnd(e.target.value)}
            className="ml-2 p-0.5 rounded-lg border border-gray-300 hover:bg-gray-100"
          ></input>
        </div>
      </>
    );
  };

  return (
    <div className="bg-white border shadow-lg border-gray-300 flex flex-col z-50 absolute left-96 top-1/4 w-5/12 h-1/3 rounded-3xl">
      <div className="flex justify-between bg-gray-100 p-4 rounded-t-3xl">
        <textarea
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={`flex items-center focus: h-8 w-full bg-transparent resize-none text-xl mr-3 outline-none ${
            validName ? "" : "border border-red-600 rounded-lg px-2"
          }`}
          placeholder="Untitled"
        ></textarea>
        <button
          className="hover:bg-gray-300 px-3 rounded-lg"
          onClick={closeNewEvent}
        >
          X
        </button>
      </div>
      <div className="flex-col grow relative mt-3">
        <div className="h-12 flex items-center p-4 ml-1">
          Date
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="hover:bg-gray-100 p-1 px-2 border w-full border-gray-300 rounded-lg mx-3"
          ></input>
        </div>
        <div className="flex my-3">
          <div className="flex items-center ml-3">
            <input
              type="checkbox"
              onChange={() => setAllDay(!allDay)}
              className="mx-2 p-0.5 rounded-lg border border-gray-300"
            ></input>
            <h1 className="">All Day</h1>
          </div>
          {allDay ? "" : renderTimes()}
        </div>
        <button
          className="flex absolute right-4 bottom-4 px-6 py-1 bg-gray-200 rounded-lg items-center justify-center hover:bg-gray-300"
          onClick={handleSubmit}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default NewEvent;

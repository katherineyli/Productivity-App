import React, { useState } from "react";

const NewEvent = (props) => {
  const [name, setName] = useState("");
  const [validName, setValidName] = useState(true);
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [start, setStart] = useState("00:00");
  const [end, setEnd] = useState("00:00");

  const closeNewEvent = () => {
    props.setIsNewEvent(false);
  };

  return (
    <div class="bg-white border shadow-md border-gray-200 flex flex-col z-50 absolute left-96 top-1/4 w-5/12 h-1/3 rounded-lg">
      <div class="flex justify-between bg-gray-100 p-4 rounded-t-lg">
        <textarea
          value={name}
          onChange={(e) => setName(e.target.value)}
          class={`flex items-center focus: h-8 w-full bg-transparent resize-none text-xl mr-3 outline-none ${
            validName ? "" : "border border-red-600 rounded-lg px-2"
          }`}
          placeholder="Untitled"
        ></textarea>
        <button
          class="hover:bg-gray-300 px-3 rounded-lg"
          onClick={closeNewEvent}
        >
          X
        </button>
      </div>
      <div class="flex-col grow relative mt-3">
        <div class="h-12 flex items-center p-4 ml-1">
          Date
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            class="hover:bg-gray-100 p-1 px-2 border w-full border-gray-300 rounded-lg mx-3"
          ></input>
        </div>
        <div class="flex my-3">
          <div class="flex items-center ml-5">
            <h1 class="">Start Time</h1>
            <input
              type="time"
              onChange={(e) => setStart(e.target.value)}
              class="ml-2 p-0.5 rounded-lg border border-gray-300"
            ></input>
          </div>
          <div class="flex items-center ml-5">
            <h1 class="">End Time</h1>
            <input
              type="time"
              onChange={(e) => setEnd(e.target.value)}
              class="ml-2 p-0.5 rounded-lg border border-gray-300"
            ></input>
          </div>
          <div class="flex items-center ml-3">
            <input
              type="checkbox"
              //   onChange={(e) => setEnd(e.target.value)}
              class="mx-2 p-0.5 rounded-lg border border-gray-300"
            ></input>
            <h1 class="">All Day</h1>
          </div>
        </div>
        <button
          class="flex absolute right-4 bottom-4 px-6 py-1 bg-gray-200 rounded-lg items-center justify-center hover:bg-gray-300"
        //   onClick={handleSubmit}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default NewEvent;

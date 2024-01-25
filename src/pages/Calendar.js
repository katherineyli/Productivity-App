import React, { useState } from "react";
import CalendarComp from "../components/CalendarComp";
import NewEvent from "../components/NewEvent";

const Calendar = () => {
  const [isNewEvent, setIsNewEvent] = useState(false);
  const [events, setEvents] = useState([]);

  const addNewEvent = () => {
    setIsNewEvent(true);
  };

  return (
    <div class="grow relative">
      <div class="h-24 pl-12 text-3xl font-semibold flex justify-between">
        <div class="mt-12">Calendar</div>
        <button
          onClick={addNewEvent}
          class="bg-gray-200 hover:bg-gray-300 rounded-lg w-32 h-10 text-lg mt-10 mr-12"
        >
          Add Event
        </button>
      </div>
      <div class="px-12">
        <CalendarComp />
      </div>
      {isNewEvent && <NewEvent setIsNewEvent={setIsNewEvent}/>}
    </div>
  );
};

export default Calendar;

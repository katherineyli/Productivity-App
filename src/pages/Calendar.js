import React, { useState, useEffect } from "react";
import CalendarComp from "../components/CalendarComp";
import NewEvent from "../components/NewEvent";

const Calendar = (props) => {
  const [isNewEvent, setIsNewEvent] = useState(false);

  const addNewEvent = () => {
    setIsNewEvent(true);
  };

  return (
    <div className="grow relative">
      <div className="h-24 pl-12 text-3xl font-semibold flex justify-between">
        <div className="mt-12">Calendar</div>
      </div>
      <button
        onClick={addNewEvent}
        className="bg-gray-300 hover:bg-gray-400 rounded-lg w-32 h-11 text-lg absolute left-40"
      >
        Add Event
      </button>
      <div className="px-12">
        <CalendarComp calendarEvents={props.calendarEvents} />
      </div>
      {isNewEvent && (
        <NewEvent getEvents={props.getEvents} setIsNewEvent={setIsNewEvent} />
      )}
    </div>
  );
};

export default Calendar;

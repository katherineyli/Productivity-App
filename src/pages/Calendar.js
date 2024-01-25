import React, { useState, useEffect } from "react";
import CalendarComp from "../components/CalendarComp";
import NewEvent from "../components/NewEvent";

const Calendar = () => {
  const [isNewEvent, setIsNewEvent] = useState(false);
  const [events, setEvents] = useState([]);

  const getEvents = async () => {
    try {
      const response = await fetch("http://localhost:9000/events");
      const json = await response.json();
      setEvents(json);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getEvents();
  }, []);

  const addNewEvent = () => {
    setIsNewEvent(true);
  };

  return (
    <div class="grow relative">
      <div class="h-24 pl-12 text-3xl font-semibold flex justify-between">
        <div class="mt-12">Calendar</div>
      </div>
      <button
        onClick={addNewEvent}
        class="bg-gray-300 hover:bg-gray-400 rounded-lg w-32 h-11 text-lg absolute left-40"
      >
        Add Event
      </button>
      <div class="px-12">
        <CalendarComp events={events} />
      </div>
      {isNewEvent && (
        <NewEvent getEvents={getEvents} setIsNewEvent={setIsNewEvent} />
      )}
    </div>
  );
};

export default Calendar;

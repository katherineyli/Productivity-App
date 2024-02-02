import React, { useState, useEffect } from "react";
import CalendarComp from "../components/CalendarComp";
import NewEvent from "../components/NewEvent";
import DeleteForeverRounded from "@mui/icons-material/DeleteForeverRounded";

const Calendar = (props) => {
  const [isNewEvent, setIsNewEvent] = useState(false);
  const [isShowEvents, setIsShowEvents] = useState(false);
  console.log(props.calendarEvents);

  const month_to_abb = {
    "01": "Jan",
    "02": "Feb",
    "03": "Mar",
    "04": "Apr",
    "05": "May",
    "06": "Jun",
    "07": "Jul",
    "08": "Aug",
    "09": "Sep",
    10: "Oct",
    11: "Nov",
    12: "Dec",
  };

  const addNewEvent = () => {
    setIsNewEvent(true);
  };

  return (
    <div className="grow relative">
      <div className="h-24 pl-12 text-3xl font-semibold flex justify-between">
        <div className="mt-12">Calendar</div>
      </div>
      <button
        onClick={() => setIsShowEvents(!isShowEvents)}
        className={`absolute top-4 right-64 w-32 h-12 bg-${
          props.secondary
        }-300 bg-hover-${
          props.secondary
        }-400 flex justify-center items-center rounded-l-lg ${
          isShowEvents
            ? "translate-x-0 duration-300 ease-in-out"
            : "translate-x-64 duration-300 ease-in-out"
        }`}
      >
        Show Events
      </button>
      <div
        className={`absolute w-64 h-screen bg-${
          props.secondary
        }-300 right-0 top-4 flex flex-col border-t border-l border-gray-300 z-10 ${
          isShowEvents
            ? "translate-x-0 duration-300 ease-in-out"
            : "translate-x-64 duration-300 ease-in-out"
        }`}
      >
        <h1 className="h-12 text-lg font-semibold flex pl-6 items-center">
          Events
        </h1>
        <div className="grow bg-white px-4 py-4">
          {props.justEvents.map((event) => (
            <div
              className={`border border-gray-100 h-20 rounded-l mb-3 flex flex-col relative bg-${props.secondary}-100`}
            >
              <p className="text-md font-semibold mt-2 ml-4 w-44 h-7 overflow-auto">
                {event.title}
              </p>
              <p className="text-xs ml-5">{`${
                month_to_abb[event.start.slice(5, 7)]
              } ${event.start.slice(8, 10)}`}</p>
              <p className="text-xs ml-5">
                {event.allDay
                  ? "all-day"
                  : `${event.start.slice(11, 16)} - ${event.end.slice(11, 16)}`}
              </p>
              <button className="absolute top-7 right-2">
                <DeleteForeverRounded />
              </button>
            </div>
          ))}
        </div>
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

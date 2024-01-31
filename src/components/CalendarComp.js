import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // For the month view
import timeGridPlugin from "@fullcalendar/timegrid";

const CalendarComp = (props) => {
  return (
    <>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin]}
        initialView="dayGridMonth"
        headerToolbar={
          {
            left: "prev,next",
            center: "title",
            right: "dayGridMonth,timeGridWeek",
          } // user can switch between the two
        }
        height={680}
        // eventColor="rgb(229,231,235)"
        // eventTextColor="black"
        events={props.calendarEvents}
        displayEventTime={true}
      />
    </>
  );
};

export default CalendarComp;

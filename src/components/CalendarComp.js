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
        height={700}
        eventColor="rgb(229,231,235)"
        eventTextColor="black"
        // eventTimeFormat={{
        //   hour: "2-digit",
        //   minute: "2-digit",
        //   meridiem: true,
        // }}
        events={[
          {
            title: "event 1",
            start: "2024-01-22T10:00",
            end: "2024-01-22T12:00",
          },
          { title: "event 2", date: "2024-01-25" },
          { title: "event 3", date: "2024-01-27" },
          {
            title: "event 4",
            start: "2024-01-22T10:30",
            end: "2024-01-22T13:00",
          },
        ]}
        displayEventTime={true}

        // Add other props here, like 'events', 'dateClick', etc.
      />
    </>
  );
};

export default CalendarComp;

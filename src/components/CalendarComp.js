import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // For the month view
import timeGridPlugin from "@fullcalendar/timegrid";

const CalendarComp = (props) => {
  const eventToCalendarEvent = (e) => {
    const calendarEvent = {};
    if (e.allday) {
      calendarEvent.date = e.date.slice(0, 10);
    } else {
      calendarEvent.start = e.date.slice(0, 10) + "T" + e.starttime;
      calendarEvent.end = e.date.slice(0, 10) + "T" + e.endtime;
    }
    calendarEvent.title = e.name;
    return calendarEvent;
  };

  const calendarEvents = props.events.map((e) => eventToCalendarEvent(e));
  console.log(calendarEvents);

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
        events={calendarEvents}
        displayEventTime={true}
        // Add other props here, like 'events', 'dateClick', etc.
      />
    </>
  );
};

export default CalendarComp;

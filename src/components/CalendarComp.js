import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // For the month view
import timeGridPlugin from "@fullcalendar/timegrid";

export default class MyCalendar extends React.Component {
  render() {
    return (
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
        className="w-80"
        events={[
          //   {
          //     title: "event 1",
          //     start: "2024-01-01T10:00",
          //     end: "2024-01-01T12:00",
          //   },
          { title: "event 2", date: "2024-01-25" },
          { title: "event 3", date: "2024-01-27" },
          //   {
          //     title: "event 4",
          //     start: "2024-01-27T13:00",
          //     end: "2024-01-27T20:00",
          //   },
        ]}
        displayEventTime={false}
        eventTimeFormat={{
          hour: "2-digit",
          minute: "2-digit",
          meridiem: true,
        }}
        // Add other props here, like 'events', 'dateClick', etc.
      />
    );
  }
}

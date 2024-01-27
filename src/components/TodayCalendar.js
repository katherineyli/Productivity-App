import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";

const TodayCalendar = (props) => {
  return (
    <FullCalendar
      plugins={[timeGridPlugin]}
      initialView="timeGridDay"
      height={700}
      headerToolbar={
        {
          left: "",
          center: "title",
          right: "",
        } // user can switch between the two
      }
      events={props.calendarEvents}
      displayEventTime={true}
    />
  );
};

export default TodayCalendar;

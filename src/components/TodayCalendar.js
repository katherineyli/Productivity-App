import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";

const TodayCalendar = (props) => {
  return (
    <FullCalendar
      plugins={[timeGridPlugin]}
      initialView="timeGridDay"
      height={665}
      headerToolbar={false}
      events={props.calendarEvents}
      displayEventTime={true}
      eventTextColor="black"
    />
  );
};

export default TodayCalendar;

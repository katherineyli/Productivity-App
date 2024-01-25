import React from "react";
import CalendarComp from "../components/CalendarComp";

const Calendar = () => {
  return (
    <div class="grow relative">
      <div class="h-24 pl-12 text-3xl font-semibold flex">
        <div class="mt-12">Calendar</div>
      </div>
      <div class="px-12">
        <CalendarComp />
      </div>
    </div>
  );
};

export default Calendar;

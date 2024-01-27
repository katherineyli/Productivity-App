import React from "react";
import UpcomingTasks from "../components/UpcomingTasks";
import TodayCalendar from "../components/TodayCalendar";

const Home = (props) => {
  return (
    <div className="grow relative flex flex-col">
      <div className="h-24 pl-12 text-3xl font-semibold flex">
        <div className="mt-12">Home</div>
      </div>
      <div className="grow flex">
        <div className="w-2/3">left side</div>
        <div className="grow pb-8 pl-4 pr-8">
          <TodayCalendar calendarEvents={props.calendarEvents}/>
        </div>
      </div>
    </div>
  );
};

export default Home;

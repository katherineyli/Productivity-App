import React from "react";
import UpcomingTasks from "../components/UpcomingTasks";
import TodayCalendar from "../components/TodayCalendar";
import trainImage from "../images/studio-ghibli-train.jpeg";
import kikiImage from "../images/studio-ghibli-kiki.jpeg";
import totoroImage from "../images/studio-ghibli-totoro.jpeg";

const Home = (props) => {
  return (
    <div className="grow relative flex flex-col">
      <div className="h-24 ml-12 text-3xl font-semibold flex">
        <div className="mt-12">Home</div>
      </div>
      <div className="grow flex mt-8">
        <div className="w-2/3 flex-col">
          <div className="h-1/3 flex">
            <div className="w-2/3 mr-4 ml-12 mb-8">
              <img
                src={trainImage}
                alt="Studio Ghibli Image"
                className="rounded-2xl w-full"
                style={{ height: "310px", width: "750px", objectFit: "cover" }}
              ></img>
            </div>
            <div className="grow flex-col">
              <div className="border border-gray-300 rounded-2xl h-24 mb-2.5 mr-1">
                {/* Number of tasks completed */}
              </div>
              <div className="border border-gray-300 rounded-2xl h-24 mb-3 mr-1">
                {/* Percentage of tasks completed */}
              </div>
              <div className="border border-gray-300 rounded-2xl h-24 mb-3 mr-1">
                {/* Number of overdue tasks */}
              </div>
            </div>
          </div>
          <div className="grow flex mt-20">
            <div className="w-1/2">
              <div
                style={{ height: "330px" }}
                className="w-96 flex-col border border-gray-300 rounded-2xl ml-12 mb-4 px-6 py-4"
              >
                <div className="mb-3 text-lg font-semibold">Due Today</div>
                <UpcomingTasks tasks={props.tasks} />
              </div>
            </div>
            <div className="grow">
              <div
                style={{ height: "330px" }}
                className="w-96 flex-col border border-gray-300 rounded-2xl ml-8 mb-4 px-6 py-4"
              >
                <div className="mb-3 text-lg font-semibold">Weather Widget!</div>
                {/* <div>Exam content...</div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="grow pl-4 pr-8">
          <TodayCalendar calendarEvents={props.calendarEvents} />
        </div>
      </div>
    </div>
  );
};

export default Home;

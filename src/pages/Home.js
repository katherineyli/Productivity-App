import React, { useState, useEffect } from "react";
import UpcomingTasks from "../components/UpcomingTasks";
import TodayCalendar from "../components/TodayCalendar";
import trainImage from "../images/studio-ghibli-train.jpeg";
import kikiImage from "../images/studio-ghibli-kiki.jpeg";
import totoroImage from "../images/studio-ghibli-totoro.jpeg";

const Home = (props) => {
  const currDate = new Date();
  let currMonth = currDate.getMonth() + 1;
  if (currMonth < 10) {
    currMonth = "0" + currMonth;
  }
  const currDay = currDate.getDate();
  const currYear = currDate.getFullYear();
  const dateString = currYear + "-" + currMonth + "-" + currDay;

  const [numTasksIncomplete, setNumTasksIncomplete] = useState(0);
  const [numTasksOverdue, setNumTasksOverdue] = useState(0);
  const [percentageCompleted, setPercentageCompleted] = useState(0);

  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const apiKey = "673e7ca6991e8257f738e13ce2fdb04b";
        const city = "Boston";
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
        setWeatherData(json);
      } catch (err) {
        console.error(err.message);
      }
    };
    fetchWeatherData();
  }, []);

  useEffect(() => {
    const incompleteTasksCount = props.tasks.reduce((acc, task) => {
      return acc + (task.checked ? 0 : 1);
    }, 0);
    setNumTasksIncomplete(incompleteTasksCount);

    const overdueTasksCount = props.tasks.reduce((acc, task) => {
      return acc + (task.due.slice(0, 10) < dateString ? 1 : 0);
    }, 0);
    setNumTasksOverdue(overdueTasksCount);

    setPercentageCompleted(
      Math.floor(
        ((props.tasks.length - incompleteTasksCount) / props.tasks.length) * 100
      )
    );
  }, [props.tasks]);

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
                src={kikiImage}
                alt="Studio Ghibli Image"
                className="rounded-2xl w-full shadow-md"
                style={{ height: "310px", width: "750px", objectFit: "cover" }}
              ></img>
            </div>
            <div className="grow flex-col">
              <div
                className={`rounded-2xl h-24 mb-2.5 mr-1 py-4 px-6 shadow-sm flex flex-col bg-${props.primary}-100`}
              >
                <p className="font-bold text-3xl">{numTasksIncomplete}</p>
                <p>
                  {numTasksIncomplete === 1 ? "Ongoing task" : "Ongoing tasks"}
                </p>
              </div>
              <div
                className={`rounded-2xl h-24 mb-3 mr-1 py-4 px-6 shadow-sm bg-${props.primary}-100`}
              >
                <p className="font-bold text-3xl">{`${percentageCompleted}%`}</p>
                <p>of tasks completed</p>
              </div>
              <div
                className={`rounded-2xl h-24 mb-3 mr-1 py-4 px-6 shadow-sm bg-${props.primary}-100`}
              >
                <p className="font-bold text-3xl">{numTasksOverdue}</p>
                <p>
                  {numTasksOverdue === 1 ? "Overdue task" : "Overdue tasks"}
                </p>
              </div>
            </div>
          </div>
          <div className="grow flex mt-20">
            <div className="w-1/2">
              <div
                style={{ height: "330px" }}
                className={`w-96 flex-col shadow-md rounded-2xl ml-12 mb-4 px-6 py-4 bg-${props.primary}-100`}
              >
                <div className="mb-3 text-lg font-semibold">Due Today</div>
                <UpcomingTasks tasks={props.tasks} />
              </div>
            </div>
            <div className="grow">
              <div
                style={{ height: "330px" }}
                className={`w-96 flex-col shadow-md bg-${props.secondary}-100 rounded-2xl ml-8 mb-4 px-6 py-4`}
              >
                <div className="mb-3 text-lg font-semibold">
                  Weather Widget!
                </div>
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

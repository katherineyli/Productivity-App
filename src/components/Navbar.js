import React from "react";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import TaskRoundedIcon from "@mui/icons-material/TaskRounded";
import { Link } from "react-router-dom";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import TimerRoundedIcon from "@mui/icons-material/TimerRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";

const Navbar = (props) => {
  return (
    <div
      className={`flex-col h-screen w-60 space-y-1 mt-0 relative bg-${props.secondary}-100`}
    >
      <div className="h-24 items-center justify-center flex p-3">
        {/*image goes here! */}
      </div>
      <div>
        <Link
          to="/"
          className={`h-12 rounded-lg items-center flex mx-4 p-3 bg-hover-${props.secondary}-200`}
        >
          <HomeRoundedIcon className="text-gray-800" />
          <div className="px-4 text-gray-800">Home</div>
        </Link>
      </div>
      <div>
        <Link
          to="/tasks"
          className={`h-12 rounded-lg items-center flex mx-4 p-3 bg-hover-${props.secondary}-200`}
        >
          <TaskRoundedIcon className="text-gray-800" />
          <div className="px-4 text-gray-800">Tasks</div>
        </Link>
      </div>
      <div>
        <Link
          to="/calendar"
          className={`h-12 rounded-lg items-center flex mx-4 p-3 bg-hover-${props.secondary}-200`}
        >
          <CalendarMonthRoundedIcon className="text-gray-800" />
          <div className="px-4 text-gray-800">Calendar</div>
        </Link>
      </div>
      <div>
        <Link
          to="/classes"
          className={`h-12 rounded-lg items-center flex mx-4 p-3 bg-hover-${props.secondary}-200`}
        >
          <SchoolRoundedIcon className="text-gray-800" />
          <div className="px-4 text-gray-800">Classes</div>
        </Link>
      </div>
      <div>
        <Link
          to="/pomodoro"
          className={`h-12 rounded-lg items-center flex mx-4 p-3 bg-hover-${props.secondary}-200`}
        >
          <TimerRoundedIcon className="text-gray-800" />
          <div className="px-4 text-gray-800">Pomodoro</div>
        </Link>
      </div>
      <div className="absolute bottom-6 w-full">
        <Link
          to="/settings"
          className={`h-12 rounded-lg items-center flex mx-5 p-3 bg-hover-${props.secondary}-200`}
        >
          <SettingsRoundedIcon className="text-gray-800" />
          <div className="px-4 text-gray-800">Settings</div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

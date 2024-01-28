import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BiTask } from "react-icons/bi";
import { Link } from "react-router-dom";
import { IoCalendarClearOutline } from "react-icons/io5";
import { FaRegNoteSticky, FaUser } from "react-icons/fa6";
import { FaBook } from "react-icons/fa";
import { PiTimerLight } from "react-icons/pi";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="flex-col bg-gray-100 h-screen w-60 space-y-1 mt-0 relative">
      <div className="h-24 items-center justify-center flex p-3">
        {/* <img src="../app-logo"></img> */}
      </div>
      <div>
        <Link
          to="/"
          className="h-12 rounded-lg items-center flex mx-4 p-3 hover:bg-gray-200"
        >
          <AiOutlineHome />
          <div className="px-4">Home</div>
        </Link>
      </div>
      <div>
        <Link
          to="/tasks"
          className="h-12 rounded-lg items-center flex mx-4 p-3 hover:bg-gray-200"
        >
          <BiTask />
          <div className="px-4">Tasks</div>
        </Link>
      </div>
      <div>
        <Link
          to="/calendar"
          className="h-12 rounded-lg items-center flex mx-4 p-3 hover:bg-gray-200"
        >
          <IoCalendarClearOutline />
          <div className="px-4">Calendar</div>
        </Link>
      </div>
      <div>
        <Link
          to="/classes"
          className="h-12 rounded-lg items-center flex mx-4 p-3 hover:bg-gray-200"
        >
          <FaBook />
          <div className="px-4">Classes</div>
        </Link>
      </div>
      <div>
        <Link
          to="/pomodoro"
          className="h-12 rounded-lg items-center flex mx-4 p-3 hover:bg-gray-200"
        >
          <PiTimerLight />
          <div className="px-4">Pomodoro</div>
        </Link>
      </div>
      <div className="absolute bottom-6 w-full">
        <Link
          to="/"
          className="h-12 rounded-lg items-center flex mx-5 p-3 hover:bg-gray-200"
        >
          <FaUserCircle />
          <div className="px-4">Login</div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

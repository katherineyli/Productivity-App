import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BiTask } from "react-icons/bi";
import { Link } from "react-router-dom";
import { IoCalendarClearOutline } from "react-icons/io5";
import { FaRegNoteSticky } from "react-icons/fa6";

function Navbar() {
  return (
    <div class="flex-col bg-gray-100 h-screen w-60 space-y-1 mt-0">
      <div class="h-24 items-center justify-center flex p-3"></div>
      <div>
        <Link
          to="/"
          class="h-12 rounded-lg items-center flex mx-4 p-3 hover:bg-gray-200"
        >
          <AiOutlineHome />
          <div class="px-4">Home</div>
        </Link>
      </div>
      <div>
        <Link
          to="/tasks"
          class="h-12 rounded-lg items-center flex mx-4 p-3 hover:bg-gray-200"
        >
          <BiTask />
          <div class="px-4">Tasks</div>
        </Link>
      </div>
      <div>
        <Link
          to="/calendar"
          class="h-12 rounded-lg items-center flex mx-4 p-3 hover:bg-gray-200"
        >
          <IoCalendarClearOutline />
          <div class="px-4">Calendar</div>
        </Link>
      </div>
      <div>
        <Link
          to="/exams"
          class="h-12 rounded-lg items-center flex mx-4 p-3 hover:bg-gray-200"
        >
          <FaRegNoteSticky />
          <div class="px-4">Exams</div>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;

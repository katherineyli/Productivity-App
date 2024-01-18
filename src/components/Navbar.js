import React from "react";

function Navbar() {
  return (
    <ul class="flex-col h-screen w-56 bg-gray-300 flex-1 justify-center">
      <li class="bg-gray-200">Home</li>
      <li>Tasks</li>
      <li>Calendar</li>
      <li>Exams</li>
      <li>Pomodoro</li>
    </ul>
  );
}

export default Navbar;

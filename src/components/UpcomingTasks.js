import React from "react";

const UpcomingTasks = (props) => {
  const currDate = new Date();
  let currMonth = currDate.getMonth() + 1;
  if (currMonth < 10) {
    currMonth = "0" + currMonth;
  }
  const currDay = currDate.getDate();
  const currYear = currDate.getFullYear();
  const dateString = currYear + "-" + currMonth + "-" + currDay;

  const todayTasks = props.tasks.filter(
    (task) => task.due.slice(0, 10) === dateString
  );

  if (todayTasks.length === 0) {
    return <div className="text-sm text-gray-500">No tasks due today</div>;
  }

  return (
    <ul className="h-64 overflow-auto">
      {todayTasks.map((task) => (
        <li className="h-10 bg-white flex border border-gray-200 rounded-lg items-center mb-2 px-3">
          {task.content}
        </li>
      ))}
    </ul>
  );
};

export default UpcomingTasks;

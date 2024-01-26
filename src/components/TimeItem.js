import React from "react";

const TimeItem = (props) => {
  const time = props.time;
  const mon = time.slice(0, 1) === "T" ? "M, " : "";
  const tue = time.slice(1, 2) === "T" ? "T, " : "";
  const wed = time.slice(2, 3) === "T" ? "W, " : "";
  const thu = time.slice(3, 4) === "T" ? "R, " : "";
  const fri = time.slice(4, 5) === "T" ? "F, " : "";
  const startTime = time.slice(5, 10);
  const endTime = time.slice(11, 16);

  const days = (mon + tue + wed + thu + fri).slice(0, -2);

  const convertTime = (time) => {
    let hour = time.slice(0, 2);
    const min = time.slice(3, 5);
    let ampm;
    hour = parseInt(hour);
    if (hour >= 12) {
      ampm = "PM";
      hour = hour % 12;
    } else {
      ampm = "AM";
    }
    if (hour === 0) {
      hour = 12;
    }
    const newTime = hour + ":" + min + " " + ampm;
    return newTime;
  };

  return (
    <div className="bg-gray-100 rounded-lg p-2 mb-1 flex justify-between items-center">
      <div className="text-sm pl-1">{`${convertTime(startTime)} - ${convertTime(
        endTime
      )}`}</div>
      <div className="text-sm pr-1">{days}</div>
    </div>
  );
};

export default TimeItem;

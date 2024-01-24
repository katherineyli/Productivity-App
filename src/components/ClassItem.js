import React from "react";

const ClassItem = (props) => {
  const startMonth = props.startDate.slice(5, 7);
  const startDay = props.startDate.slice(8, 10);
  const startYear = props.startDate.slice(0, 4);
  const endMonth = props.endDate.slice(5, 7);
  const endDay = props.startDate.slice(8, 10);
  const endYear = props.endDate.slice(0, 4);

  return (
    <div class="bg-gray-100 rounded-lg h-80 flex flex-col">
      <div class="bg-gray-200 h-28 rounded-t-lg flex flex-col py-2 px-3">
        <div class="flex justify-between">
          <div class="text-xl font-semibold">{props.name}</div>
          <div class="text-xl font-semibold">{props.num}</div>
        </div>
        <div class="text-xs">{props.term}</div>
        <div class="text-xs">
          {`${startMonth}/${startDay}/${startYear} - ${endMonth}/${endDay}/${endYear}`}
        </div>
        <div class="text-xs">{props.location}</div>
        <div class="text-xs">{props.instructor}</div>
      </div>
    </div>
  );
};

export default ClassItem;

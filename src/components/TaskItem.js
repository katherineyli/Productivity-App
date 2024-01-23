import React from "react";
import { IoTrashOutline } from "react-icons/io5";

//props: name, class, due, count, deleteTask

const month_to_abb = {
  "01": "Jan",
  "02": "Feb",
  "03": "Mar",
  "04": "Apr",
  "05": "May",
  "06": "Jun",
  "07": "Jul",
  "08": "Aug",
  "09": "Sep",
  "10": "Oct",
  "11": "Nov",
  "12": "Dec",
}

const TaskItem = (props) => {
  const month = props.due.slice(5, 7);
  const day = props.due.slice(8,10);
  return (
    <li class="flex justify-between bg-white mb-2 p-3 border rounded-lg border-gray-200 items-center">
      <div class="flex items-center">
        <input type="checkbox" name={props.content} />
        <label for={props.content} class="ml-2">
          {props.content}
        </label>
      </div>
      <div class="flex items-center">
        <div class="mr-4 text-sm border border-gray-200 h-6 px-3 items-center justify-center flex rounded-lg">
          {props.course}
        </div>
        <p class="text-sm mr-3">{`${month_to_abb[month]} ${day}`}</p>
        <button onClick={() => props.deleteTask(props.taskId)}>
          <IoTrashOutline class="mr-2" />
        </button>
      </div>
    </li>
  );
};

export default TaskItem;

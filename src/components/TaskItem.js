import React from "react";
import { IoTrashOutline } from "react-icons/io5";
import { BsClock } from "react-icons/bs";
import { TbEdit } from "react-icons/tb";

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
  10: "Oct",
  11: "Nov",
  12: "Dec",
};

const TaskItem = (props) => {
  const month = props.due.slice(5, 7);
  const day = props.due.slice(8, 10);

  const currDate = new Date();
  let currMonth = currDate.getMonth() + 1;
  if (currMonth < 10) {
    currMonth = "0" + currMonth;
  }
  const currDay = currDate.getDate();
  const currYear = currDate.getFullYear();
  const dateString = currYear + "-" + currMonth + "-" + currDay;

  const priorityToIcon = (priority) => {
    if (priority === "Low") {
      return <div>!</div>;
    } else if (priority === "High") {
      return <div>!!</div>;
    }
  };

  const deleteTask = async (id) => {
    try {
      const deleteTask = await fetch(`http://localhost:9000/tasks/${id}`, {
        method: "DELETE",
      });
      props.getTasks();
    } catch (err) {
      console.error(err);
    }
  };

  const toggleEdit = (id) => {
    props.setIsEditTask(true);
    props.setEditId(id);
  };

  return (
    <li class="flex justify-between bg-white h-12 mb-2 p-3 border rounded-lg border-gray-200 items-center">
      <div class="flex items-center">
        <input type="checkbox" name={props.content} />
        <label for={props.content} class="ml-2">
          {props.content}
        </label>
      </div>
      <div class="flex items-center">
        <div class="mr-3">{props.reminder !== "None" && <BsClock />}</div>
        <div class="mr-3 font-bold">{priorityToIcon(props.priority)}</div>
        <div class="mr-4 text-sm border border-gray-200 h-6 px-3 items-center justify-center flex rounded-lg">
          {props.course}
        </div>
        <div
          class={`text-sm mr-3 ${
            props.due.slice(0, 10) < dateString ? "text-red-600" : "text-black"
          }`}
        >{`${month_to_abb[month]} ${day}`}</div>
        <button onClick={() => deleteTask(props.taskId)}>
          <IoTrashOutline class="mr-2" />
        </button>
        <button onClick={() => toggleEdit(props.taskId)}>
          <TbEdit class="mr-2" />
        </button>
      </div>
    </li>
  );
};

export default TaskItem;

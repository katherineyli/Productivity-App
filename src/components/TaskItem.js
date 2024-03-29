import React from "react";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import AccessAlarmRoundedIcon from "@mui/icons-material/AccessAlarmRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";

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
  let currDay = currDate.getDate();
  if (currDay < 10) {
    currDay = "0" + currDay;
  }
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

  const toggleChecked = async (id, checked) => {
    //set checked in database for this task to !checked
    try {
      const body = { checked: !checked };
      const response = await fetch(
        `http://localhost:9000/tasks/${id}/toggleChecked`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );
      const json = await response.json();
      props.getTasks();
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <li
      className={`flex justify-between h-12 mb-2 p-3 rounded-lg bg-hover-${props.primary}-200 shadow-sm items-center bg-${props.primary}-100 border border-hover-${props.primary}-300`}
    >
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={props.checked}
          name={props.content}
          onClick={() => toggleChecked(props.taskId, props.checked)}
        />
        <label htmlFor={props.content} className="ml-2">
          {props.content}
        </label>
      </div>
      <div className="flex items-center">
        <div className="mr-3">
          {props.reminder !== "None" && <AccessAlarmRoundedIcon />}
        </div>
        <div className="mr-3 font-bold">{priorityToIcon(props.priority)}</div>
        <div className="mr-4 text-sm border border-black h-6 px-3 items-center justify-center flex rounded-lg">
          {props.course}
        </div>
        <div
          className={`text-sm mr-2 ${
            props.due.slice(0, 10) < dateString ? "text-red-600" : "text-black"
          }`}
        >{`${month_to_abb[month]} ${day}`}</div>
        <button onClick={() => deleteTask(props.taskId)}>
          <DeleteForeverRoundedIcon className="mr-1 text-gray-600" />
        </button>
        <button onClick={() => toggleEdit(props.taskId)}>
          <EditRoundedIcon className="mr-1 text-gray-600" />
        </button>
      </div>
    </li>
  );
};

export default TaskItem;

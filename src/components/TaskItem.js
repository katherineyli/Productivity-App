import React from "react";
import { IoTrashOutline } from "react-icons/io5";

//props: name, class, due

const TaskItem = (props) => {
  return (
    <li class="flex justify-between bg-white mx-12 mb-2 p-3 border rounded-lg border-gray-200">
      <div class="flex items-center">
        <input type="checkbox" id={props.name} name={props.name} />
        <label for={props.name} class="ml-2">
          {props.name}
        </label>
      </div>
      <div class="flex items-center">
        <div class="mr-4 text-sm bg-gray-100 py-1 px-6 items-center justify-center flex rounded-lg">
          {props.class}
        </div>
        <p class="text-sm mr-4">{props.due}</p>
        <IoTrashOutline class="mr-2" />
      </div>
    </li>
  );
};

export default TaskItem;

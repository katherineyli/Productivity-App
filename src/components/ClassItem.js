import React from "react";
import { IoTrashOutline } from "react-icons/io5";
import { TbEdit } from "react-icons/tb";

const ClassItem = (props) => {
  const startMonth = props.startDate.slice(5, 7);
  const startDay = props.startDate.slice(8, 10);
  const startYear = props.startDate.slice(0, 4);
  const endMonth = props.endDate.slice(5, 7);
  const endDay = props.startDate.slice(8, 10);
  const endYear = props.endDate.slice(0, 4);

  const deleteClass = async (id, name) => {
    try {
      const deleteClass = await fetch(
        `http://localhost:9000/classes/${id}/${name}`,
        {
          method: "DELETE",
        }
      );
      props.getClasses();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div
      className={`relative rounded-lg h-80 flex flex-col shadow-md ${props.applyColor(
        props.primary,
        100
      )}`}
    >
      <div
        className={`h-28 rounded-t-lg flex flex-col py-2 px-3 ${props.applyColor(
          props.primary,
          200
        )}`}
      >
        <div className="flex justify-between">
          <div className="text-xl font-semibold">{props.name}</div>
          <div className="text-xl font-semibold">{props.num}</div>
        </div>
        <div className="text-xs">{props.term}</div>
        <div className="text-xs">
          {`${startMonth}/${startDay}/${startYear} - ${endMonth}/${endDay}/${endYear}`}
        </div>
        <div className="text-xs">{props.location}</div>
        <div className="text-xs">{props.instructor}</div>
      </div>
      <div className="absolute right-3 bottom-4 flex">
        <button>
          <IoTrashOutline
            className="mr-1"
            onClick={() => deleteClass(props.classId, props.name)}
          />
        </button>
        <button>
          <TbEdit />
        </button>
      </div>
    </div>
  );
};

export default ClassItem;

import React from "react";
import ClassItem from "./ClassItem";

const ClassList = (props) => {
  if (props.classes.length === 0) {
    return (
      <div className="mx-12 mt-4 flex justify-center text-gray-500">
        No current classes
      </div>
    );
  }
  return (
    <div className="grid grid-cols-3 gap-5 mx-12 overflow-auto grow mt-8">
      {props.classes.map((clas) => (
        <ClassItem
          classId={clas.class_id}
          name={clas.classname}
          term={clas.term}
          location={clas.loc}
          instructor={clas.instructor}
          startDate={clas.startdate}
          endDate={clas.enddate}
          num={clas.num}
          getClasses={props.getClasses}
        />
      ))}
    </div>
  );
};

export default ClassList;

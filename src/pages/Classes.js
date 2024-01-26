import React, { useState, useEffect } from "react";
import NewClass from "../components/NewClass";
import ClassList from "../components/ClassList";

const Classes = (props) => {
  const [isNewClass, setIsNewClass] = useState(false);

  const addNewClass = () => {
    setIsNewClass(true);
  };

  useEffect(() => {
    props.getClasses();
  }, []);

  
  return (
    <div className="grow relative flex flex-col">
      <div className="h-24 pl-12 text-3xl font-semibold flex mb-2">
          <div className="mt-12">Classes</div>
        </div>
      <button
        onClick={addNewClass}
        className="bg-gray-300 hover:bg-gray-400 rounded-lg mx-12 py-2 px-4"
      >
        Add Class
      </button>
      {isNewClass && (
        <NewClass
          classes={props.classes}
          setClasses={props.setClasses}
          setIsNewclassName={setIsNewClass}
          getClasses={props.getClasses}
        />
      )}
      <ClassList classes={props.classes} getClasses={props.getClasses}/>
    </div>
  );
};

export default Classes;

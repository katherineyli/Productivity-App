import React, { useState, useEffect } from "react";
import NewClass from "../components/NewClass";
import ClassList from "../components/ClassList";

const Classes = () => {
  const [isNewClass, setIsNewClass] = useState(false);
  const [classes, setClasses] = useState([]);

  const addNewClass = () => {
    setIsNewClass(true);
  };

  useEffect(() => {
    getClasses();
  }, []);

  const getClasses = async () => {
    try {
      const response = await fetch("http://localhost:9000/classes");
      const json = await response.json();
      setClasses(json);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div class="grow relative flex flex-col">
      <div class="h-24 pl-12 text-3xl font-semibold flex mb-2">
          <div class="mt-12">Classes</div>
        </div>
      <button
        onClick={addNewClass}
        class="bg-gray-200 hover:bg-gray-300 rounded-lg mx-12 py-2 px-4"
      >
        Add Class
      </button>
      {isNewClass && (
        <NewClass
          classes={classes}
          setClasses={setClasses}
          setIsNewClass={setIsNewClass}
          getClasses={getClasses}
        />
      )}
      <ClassList classes={classes}/>
    </div>
  );
};

export default Classes;

import React, {useState} from "react";
import NewClass from "../components/NewClass";

const Classes = () => {
  const [isNewClass, setIsNewClass] = useState(false);

  const addNewClass = () => {
    setIsNewClass(true);
  };



  return (
    <div class="grow relative">
      <h1 class="ml-4 bg-white h-24 items-center pl-8 text-3xl font-semibold flex">
        Classes
      </h1>
      <button
        onClick={addNewClass}
        class="bg-gray-200 rounded-lg ml-12 py-2 px-4"
      >
        Add Class
      </button>
      {isNewClass && <NewClass setIsNewClass={setIsNewClass}/>}
    </div>
  );
};

export default Classes;

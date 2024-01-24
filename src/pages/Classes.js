import React, { useState } from "react";
import NewClass from "../components/NewClass";

const Classes = () => {
  const [isNewClass, setIsNewClass] = useState(false);

  const addNewClass = () => {
    setIsNewClass(true);
  };

  return (
    <div class="grow relative flex flex-col">
      <h1 class="flex-none h-24 items-center px-12 text-3xl font-semibold flex">
        Classes
      </h1>
      <button
        onClick={addNewClass}
        class="bg-gray-200 hover:bg-gray-300 rounded-lg mx-12 py-2 px-4"
      >
        Add Class
      </button>
      {isNewClass && <NewClass setIsNewClass={setIsNewClass} />}
      <div class="grid grid-cols-3 gap-10 px-12 overflow-auto grow mt-8">
        {/* <div class="bg-gray-100 rounded-lg h-80">Class 1</div>
        <div class="bg-gray-100 rounded-lg h-80">Class 2</div>
        <div class="bg-gray-100 rounded-lg h-80">Class 3</div>
        <div class="bg-gray-100 rounded-lg h-80">Class 4</div>
        <div class="bg-gray-100 rounded-lg h-80">Class 5</div>
        <div class="bg-gray-100 rounded-lg h-80">Class 6</div>
        <div class="bg-gray-100 rounded-lg h-80">Class 7</div>
        <div class="bg-gray-100 rounded-lg h-80">Class 8</div>
        <div class="bg-gray-100 rounded-lg h-80">Class 9</div> */}
      </div>
    </div>
  );
};

export default Classes;

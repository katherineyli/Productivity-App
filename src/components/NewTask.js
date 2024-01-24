import React, { useState } from "react";

//props: setIsNewTask, tasks, setTasks, count, setCount, selectedClass

const NewTask = (props) => {
  // const [inputName, setInputName] = useState("");
  const [content, setContent] = useState("");
  const [course, setCourse] = useState("");
  const [due, setDue] = useState(new Date().toISOString().slice(0, 10));
  const [pri, setPri] = useState("None");
  const [reminder, setReminder] = useState("None");

  const closeNewTask = () => {
    props.setIsNewTask(false);
  };

  const handleSubmit = async () => {
    try {
      const body = { content, course, due, pri, reminder };
      const response = await fetch("http://localhost:9000/tasks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      console.log(response);
      props.getTasks();
      closeNewTask();
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div class="bg-white border border-gray-200 flex flex-col z-50 absolute left-1/4 top-1/4 w-1/2 h-1/2 rounded-lg">
      <div class="flex justify-between bg-gray-100 p-4 rounded-t-lg">
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          class="flex items-center focus: h-8 w-full bg-transparent resize-none text-xl outline-none"
          placeholder="Untitled"
        ></textarea>
        <button
          class="hover:bg-gray-300 px-3 rounded-lg"
          onClick={closeNewTask}
        >
          X
        </button>
      </div>
      <div class="flex-col grow relative mt-2">
        <div class="h-12 flex items-center p-4 ml-1">
          Class
          <select
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            class="hover:bg-gray-100 w-full p-1 px-2 border border-gray-300 rounded-lg mx-3"
          >
            <option value=""></option>
            {props.classes.map((clas) => (
              <option value={`${clas.num}`}>{clas.num}</option>
            ))}
          </select>
        </div>
        <div class="h-12 flex items-center p-4 ml-1">
          Due
          <input
            type="date"
            value={due}
            onChange={(e) => setDue(e.target.value)}
            class="hover:bg-gray-100 p-1 px-2 border w-full border-gray-300 rounded-lg mx-3"
          ></input>
        </div>
        <div class="h-12 flex items-center p-4 ml-1">
          Priority
          <select
            value={pri}
            onChange={(e) => setPri(e.target.value)}
            class="hover:bg-gray-100 p-1 px-2 border w-full border-gray-300 rounded-lg mx-3"
          >
            <option value="None">None</option>
            <option value="High">High</option>
            <option value="Low">Low</option>
          </select>
        </div>
        <div class="h-12 flex items-center p-4 ml-1">
          Reminder
          <select
            value={reminder}
            onChange={(e) => setReminder(e.target.value)}
            class="hover:bg-gray-100 w-full p-1 px-2 border border-gray-300 rounded-lg mx-3"
          >
            <option value="None">None</option>
            <option value="15MIN">15 min before</option>
            <option value="1HR">1 hour before</option>
            <option value="3HR">3 hours before</option>
            <option value="1DAY">1 day before</option>
          </select>
        </div>
        <button
          class="flex absolute right-4 bottom-4 px-6 py-1 bg-gray-200 rounded-lg items-center justify-center hover:bg-gray-300"
          onClick={handleSubmit}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default NewTask;

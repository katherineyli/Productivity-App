import React, { useState } from "react";

//props: setIsNewTask, tasks, setTasks, count, setCount, selectedClass

const NewTask = (props) => {
  // const [inputName, setInputName] = useState("");
  const [content, setContent] = useState("");
  const [course, setCourse] = useState("");
  const [due, setDue] = useState(new Date().toISOString().slice(0, 10));
  const [pri, setPri] = useState("None");
  const [reminder, setReminder] = useState("None");
  const [validContent, setValidContent] = useState(true);
  const [validCourse, setValidCourse] = useState(true);
  const [validDue, setValidDue] = useState(true);

  const closeNewTask = () => {
    props.setIsNewTask(false);
  };

  const handleSubmit = async () => {
    try {
      content ? setValidContent(true) : setValidContent(false);
      course ? setValidCourse(true) : setValidCourse(false);
      due ? setValidDue(true) : setValidDue(false);
      if (!content || !course || !due) {
        return;
      }
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
    <div className="bg-white border shadow-lg border-gray-300 flex flex-col z-50 absolute left-1/4 top-1/4 w-1/2 h-1/2 rounded-3xl">
      <div className="flex justify-between bg-gray-100 p-4 rounded-t-3xl">
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className={`flex items-center focus: h-8 w-full bg-transparent resize-none text-xl mr-3 outline-none px-2 ${
            validContent
              ? ""
              : "border border-red-600 rounded-lg bg-red-50 px-2"
          }`}
          placeholder="Untitled"
        ></textarea>
        <button
          className="hover:bg-gray-300 px-3 rounded-lg"
          onClick={closeNewTask}
        >
          X
        </button>
      </div>
      <div className="flex-col grow relative mt-2">
        <div className="h-12 flex items-center p-4 ml-1">
          Class
          <select
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            className={` w-full p-1 px-2 border border-gray-300 rounded-lg mx-3 ${
              validCourse
                ? "hover:bg-gray-100"
                : "border border-red-600 bg-red-50"
            }`}
          >
            <option value=""></option>
            {props.classes.map((clas) => (
              <option value={`${clas.num}`}>{clas.num}</option>
            ))}
          </select>
        </div>
        <div className="h-12 flex items-center p-4 ml-1">
          Due
          <input
            type="date"
            value={due}
            onChange={(e) => setDue(e.target.value)}
            className={`p-1 px-2 border w-full border-gray-300 rounded-lg mx-3 ${
              validDue ? "hover:bg-gray-100" : "border border-red-600 bg-red-50"
            }`}
          ></input>
        </div>
        <div className="h-12 flex items-center p-4 ml-1">
          Priority
          <select
            value={pri}
            onChange={(e) => setPri(e.target.value)}
            className="hover:bg-gray-100 p-1 px-2 border w-full border-gray-300 rounded-lg mx-3"
          >
            <option value="None">None</option>
            <option value="High">High</option>
            <option value="Low">Low</option>
          </select>
        </div>
        <div className="h-12 flex items-center p-4 ml-1">
          Reminder
          <select
            value={reminder}
            onChange={(e) => setReminder(e.target.value)}
            className="hover:bg-gray-100 w-full p-1 px-2 border border-gray-300 rounded-lg mx-3"
          >
            <option value="None">None</option>
            <option value="15MIN">15 min before</option>
            <option value="1HR">1 hour before</option>
            <option value="3HR">3 hours before</option>
            <option value="1DAY">1 day before</option>
          </select>
        </div>
        <button
          className="flex absolute right-7 bottom-6 px-6 py-1 bg-gray-200 rounded-lg items-center justify-center hover:bg-gray-300"
          onClick={handleSubmit}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default NewTask;

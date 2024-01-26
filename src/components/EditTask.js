import React, { useState, useEffect } from "react";

const EditTask = (props) => {
  const [content, setContent] = useState("");
  const [course, setCourse] = useState("");
  const [due, setDue] = useState("");
  const [pri, setPri] = useState("");
  const [reminder, setReminder] = useState("");
  const [validContent, setValidContent] = useState(true);
  const [validCourse, setValidCourse] = useState(true);

  useEffect(() => {
    if (props.task) {
      setContent(props.task.content);
      setCourse(props.task.course);
      setDue(props.task.due.slice(0, 10));
      setPri(props.task.pri);
      setReminder(props.task.reminder);
    }
  }, [props.task]);

  const closeEditTask = () => {
    props.setIsEditTask(false);
  };

  const handleSubmit = async (id) => {
    try {
      content ? setValidContent(true) : setValidContent(false);
      course ? setValidCourse(true) : setValidCourse(false);
      if (!content || !course) {
        return;
      }
      const body = { content, course, due, pri, reminder };
      const response = await fetch(`http://localhost:9000/tasks/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      console.log(response);
      const json = await response.json();
      props.getTasks();
      closeEditTask();
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="bg-white border border-gray-200 flex flex-col z-50 absolute left-1/4 top-1/4 w-1/2 h-1/2 rounded-lg">
      <div className="flex justify-between bg-gray-100 p-4 rounded-t-lg">
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className={`flex items-center focus: h-8 w-full bg-transparent resize-none text-xl mr-3 outline-none ${
            validContent ? "" : "border border-red-600 rounded-lg px-2"
          }`}
          placeholder="Untitled"
        ></textarea>
        <button
          className="hover:bg-gray-300 px-3 rounded-lg"
          onClick={closeEditTask}
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
            className={`hover:bg-gray-100 w-full p-1 px-2 border border-gray-300 rounded-lg mx-3 ${
              validCourse ? "" : "border border-red-600"
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
            className="hover:bg-gray-100 p-1 px-2 border w-full border-gray-300 rounded-lg mx-3"
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
          className="flex absolute right-4 bottom-4 px-6 py-1 bg-gray-200 rounded-lg items-center justify-center hover:bg-gray-300"
          onClick={() => handleSubmit(props.editId)}
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default EditTask;

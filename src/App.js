import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import Calendar from "./pages/Calendar";
import Classes from "./pages/Classes";
import Pomodoro from "./pages/Pomodoro";
import { useState, useEffect } from "react";
import Settings from "./pages/Settings";

const App = () => {
  const [events, setEvents] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [primary, setprimary] = useState("blue");
  const [secondary, setsecondary] = useState("red");

  const applyColor = (name, weight, border = false) => {
    if (border) {
      return "border-" + name + "-" + weight;
    }
    return "bg-" + name + "-" + weight;
  };

  const colorNumbers = {
    red: "#fda4af",
  };

  const taskToCalendarTask = (t) => {
    const calendarTask = {
      start: t.due.slice(0, 10),
      allDay: true,
      title: t.content,
      color: colorNumbers[primary],
    };
    return calendarTask;
  };

  const eventToCalendarEvent = (e) => {
    const calendarEvent = {};
    if (e.allday) {
      calendarEvent.start = e.date.slice(0, 10);
      calendarEvent.allDay = true;
    } else {
      calendarEvent.allDay = false;
      calendarEvent.start = e.date.slice(0, 10) + "T" + e.starttime;
      calendarEvent.end = e.date.slice(0, 10) + "T" + e.endtime;
    }
    calendarEvent.title = e.name;
    return calendarEvent;
  };

  const calendarEvents = events
    .map((e) => eventToCalendarEvent(e))
    .concat(tasks.map((t) => taskToCalendarTask(t)));

  const getEvents = async () => {
    try {
      const response = await fetch("http://localhost:9000/events");
      const json = await response.json();
      setEvents(json);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getEvents();
    getTasks();
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

  const getTasks = async () => {
    try {
      const response = await fetch("http://localhost:9000/tasks");
      const json = await response.json();
      setTasks(json);
    } catch (err) {
      console.error(err);
    }
  };

  const [classes, setClasses] = useState([]);
  return (
    <Router>
      <div className="bg-white flex h-screen w-screen overflow-hidden">
        <Navbar secondary={secondary} applyColor={applyColor} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                calendarEvents={calendarEvents}
                tasks={tasks}
                applyColor={applyColor}
                primary={primary}
                secondary={secondary}
              />
            }
          />
          <Route
            path="/tasks"
            element={
              <Tasks
                classes={classes}
                setClasses={setClasses}
                getClasses={getClasses}
                tasks={tasks}
                setTasks={setTasks}
                getTasks={getTasks}
                primary={primary}
                applyColor={applyColor}
              />
            }
          />
          <Route
            path="/calendar"
            element={
              <Calendar getEvents={getEvents} calendarEvents={calendarEvents} />
            }
          />
          <Route
            path="/classes"
            element={
              <Classes
                classes={classes}
                setClasses={setClasses}
                getClasses={getClasses}
                primary={primary}
                applyColor={applyColor}
              />
            }
          />
          <Route
            path="/pomodoro"
            element={
              <Pomodoro
                primary={primary}
                applyColor={applyColor}
                secondary={secondary}
              />
            }
          />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

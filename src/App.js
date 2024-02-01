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
import "./styles.css";

const App = () => {
  const [events, setEvents] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [primary, setPrimary] = useState("slate");
  const [secondary, setSecondary] = useState("slate");
  const [imageUrl, setImageUrl] = useState("");


  //this is temporary until authentication is implemented!
  const [userId, setUserId] = useState(100);

  const updatePreferences = async (user_id) => {
    try {
      const body = { primary, secondary, imageUrl };
      const response = await fetch(
        `http://localhost:9000/preferences/${user_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );
      const json = await response.json();
      // getPreferences(user_id);
    } catch (err) {
      console.error(err.message);
    }
  };

  const getPreferences = async (user_id) => {
    try {
      const response = await fetch(
        `http://localhost:9000/preferences/${user_id}`
      );
      const json = await response.json();
      const userPreferences = json[0];
      setPrimary(userPreferences.primary_color);
      setSecondary(userPreferences.secondary_color);
      setImageUrl(userPreferences.image_url);
    } catch (err) {
      console.error(err.message);
    }
  };

  const colorNumbers = {
    red: "#fda4af",
    orange: "#fdba74",
    yellow: "#fde047",
    lime: "#bef264",
    green: "#86efac",
    teal: "#5eead4",
    cyan: "#67e8f9",
    sky: "#7dd3fc",
    blue: "#93c5fd",
    indigo: "#a5b4fc",
    purple: "#d8b4fe",
    fuchsia: "#f0abfc",
    pink: "#f9a8d4",
    rose: "#fda4af",
    slate: "#cbd5e1",
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
    calendarEvent.color = colorNumbers[secondary];
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
    getPreferences(userId);
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
        <Navbar secondary={secondary} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                calendarEvents={calendarEvents}
                tasks={tasks}
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
              />
            }
          />
          <Route
            path="/pomodoro"
            element={<Pomodoro primary={primary} secondary={secondary} />}
          />
          <Route
            path="/settings"
            element={
              <Settings
                setPrimary={setPrimary}
                setSecondary={setSecondary}
                primary={primary}
                secondary={secondary}
                updatePreferences={updatePreferences}
                userId={userId}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

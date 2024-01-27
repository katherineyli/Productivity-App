import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import Calendar from "./pages/Calendar";
import Exams from "./pages/Exams";
import Classes from "./pages/Classes";
import Pomodoro from "./pages/Pomodoro";
import { useState, useEffect } from "react";

const App = () => {
  const [events, setEvents] = useState([])
  
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

  const calendarEvents = events.map((e) => eventToCalendarEvent(e));

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
  const [classes, setClasses] = useState([]);
  return (
    <Router>
      <div className="bg-white flex h-screen w-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home calendarEvents={calendarEvents} />} />
          <Route
            path="/tasks"
            element={
              <Tasks
                classes={classes}
                setClasses={setClasses}
                getClasses={getClasses}
              />
            }
          />
          <Route
            path="/calendar"
            element={
              <Calendar
                getEvents={getEvents}
                calendarEvents={calendarEvents}
              />
            }
          />
          <Route path="/exams" element={<Exams />} />
          <Route
            path="/classes"
            element={
              <Classes
                classes={classes}
                setClasses={setClasses}
                getClasses={getClasses}
              />
            }
          />
          <Route path="/pomodoro" element={<Pomodoro />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

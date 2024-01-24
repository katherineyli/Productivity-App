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
import { useState } from "react";

const App = () => {
  const [classes, setClasses] = useState([]);
  return (
    <Router>
      <div class="bg-white flex h-screen w-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<Tasks classes={classes}/>} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/exams" element={<Exams />} />
          <Route
            path="/classes"
            element={<Classes classes={classes} setClasses={setClasses} />}
          />
          <Route path="/pomodoro" element={<Pomodoro />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import Calendar from "./pages/Calendar";
import Exams from "./pages/Exams";
import Classes from "./pages/Classes";

const App = () => {
  return (
    <Router>
      <div class="bg-white flex">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/exams" element={<Exams />} />
          <Route path="/classes" element={<Classes />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

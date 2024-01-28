const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json());

//Add routes below
app.get("/", (req, res) => {
  res.send("Hello World!");
});

//add task
app.post("/tasks", async (req, res) => {
  try {
    const { content, course, due, pri, reminder } = req.body;
    const newTask = await pool.query(
      "INSERT INTO task (content, course, due, pri, reminder) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [content, course, due, pri, reminder]
    );
    res.json(newTask);
  } catch (err) {
    console.error(err.message);
  }
});

//add class
app.post("/classes", async (req, res) => {
  try {
    const { name, term, location, instructor, startDate, endDate, num, times } =
      req.body;
    const newClass = await pool.query(
      "INSERT INTO class (classname, term, loc, instructor, startdate, enddate, num, times) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
      [name, term, location, instructor, startDate, endDate, num, times]
    );
    res.json(newClass);
  } catch (err) {
    console.error(err.message);
  }
});

//add event
app.post("/events", async (req, res) => {
  try {
    const { name, date, start, end, allDay } = req.body;
    const newEvent = await pool.query(
      "INSERT INTO event (name, date, starttime, endtime, allday) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [name, date, start, end, allDay]
    );
    res.json(newEvent);
  } catch (err) {
    console.error(err.message);
  }
});

//get all tasks
app.get("/tasks", async (req, res) => {
  try {
    const allTasks = await pool.query("SELECT * FROM task ORDER BY due ASC");
    res.json(allTasks.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//get one task
app.get("/tasks/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const task = await pool.query("SELECT * FROM task WHERE task_id = $1", [
      id,
    ]);
    res.json(task.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//get all classes
app.get("/classes", async (req, res) => {
  try {
    const allClasses = await pool.query("SELECT * FROM class");
    res.json(allClasses.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//get all events
app.get("/events", async (req, res) => {
  try {
    const allEvents = await pool.query("SELECT * FROM event");
    res.json(allEvents.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//delete task
app.delete("/tasks/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const deleteTask = await pool.query("DELETE FROM task WHERE task_id = $1", [
      id,
    ]);
    res.json("Task was deleted");
  } catch (err) {
    console.error(err);
  }
});

//delete class
app.delete("/classes/:id/:className", async (req, res) => {
  try {
    const id = req.params.id;
    const name = req.params.className;
    const deleteClass = await pool.query(
      "DELETE FROM class WHERE class_id = $1",
      [id]
    );
    const deleteTasks = await pool.query("DELETE FROM task WHERE course = $1", [
      name,
    ]);
    res.json("Class and associated tasks were deleted");
  } catch (err) {
    console.error(err);
  }
});

//update a task
app.put("/tasks/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const { content, course, due, pri, reminder } = req.body;
    const updateTask = await pool.query(
      "UPDATE task SET content = $1, course = $2, due = $3, pri = $4, reminder = $5 WHERE task_id = $6",
      [content, course, due, pri, reminder, id]
    );
    res.json(updateTask);
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(9000, () => {
  console.log("server has started on port 9000");
});

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
    const { name, term, location, instructor, startDate, endDate, num } = req.body;
    const newClass = await pool.query(
      "INSERT INTO class (classname, term, loc, instructor, startdate, enddate, num) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
      [name, term, location, instructor, startDate, endDate, num]
    );
    res.json(newClass);
  } catch (err) {
    console.error(err.message);
  }
});

//get all tasks
app.get("/tasks", async (req, res) => {
  try {
    const allTasks = await pool.query("SELECT * FROM task");
    res.json(allTasks.rows);
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

app.listen(9000, () => {
  console.log("server has started on port 9000");
});

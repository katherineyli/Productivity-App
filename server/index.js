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
      "INSERT INTO task (content, course, due, pri, reminder) VALUES ($1, $2, $3, $4, $5)",
      [content, course, due, pri, reminder]
    );
    res.json(newTask);
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(9000, () => {
  console.log("server has started on port 9000");
});

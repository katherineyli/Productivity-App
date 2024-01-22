const express = require("express");
const app = express();
const cors = require("cors");

//middleware
app.use(cors());
app.use(express.json());

//Add routes below
app.get("/", (req, res) => {
    res.send("Hello World!");
  });


app.listen(9000, () => {
  console.log("server has started on port 9000");
});

const express = require("express");
const app = express();
const port = 3000;

// cors
const cors = require("cors");
const allowedOrigins = ["http://localhost:3000", "http://localhost:5173"];


// env
require('dotenv').config();

// database connect
const database = require("./config/database");
database.connect();

const Task = require("./models/task.model");
app.use(
  cors({
      origin: function(origin, callback) {
          if (!origin) return callback(null, true);
          if (allowedOrigins.indexOf(origin) === -1) {
              var msg =
                  "The CORS policy for this site does not " +
                  "allow access from the specified Origin.";
              return callback(new Error(msg), false);
          }
          return callback(null, true);
      }
  })
);
app.get("/tasks", async (req, res) => {
  const tasks = await Task.find({
    deleted: false
  });

  console.log(tasks)

  res.json(tasks);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
})
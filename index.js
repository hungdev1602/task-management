const express = require("express");
const app = express();
const port = 3000;

// env
require('dotenv').config();

// database connect
const database = require("./config/database");
database.connect();

// routes
const routeClient = require("./routes/index.route");
routeClient.index(app);

// cors
const cors = require("cors");
const allowedOrigins = ["http://localhost:3000", "http://localhost:5173"];

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

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
})
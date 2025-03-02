// cors
const cors = require("cors");
const allowedOrigins = ["http://localhost:3000", "http://localhost:5173"];

module.exports.index = (app) => {
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
}

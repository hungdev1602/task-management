const taskRouter = require("./task.route");

module.exports.index = (app) => {
  app.use("/tasks", taskRouter);

  
}
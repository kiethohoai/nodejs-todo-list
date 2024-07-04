const fs = require("fs");

const readAllTask = () => {
  const buffer = fs.readFileSync("task.json");
  const taskString = buffer.toString();
  const taskJson = JSON.parse(taskString);
  return taskJson;
};

const createTask = (title, description) => {
  // prepare data
  const newTask = {
    id: Math.random().toString(),
    title,
    description,
  };
  console.log("🚀CHECK  newTask =", newTask);

  let taskList = readAllTask();
  taskList = [...taskList, newTask];

  fs.writeFileSync("task.json", JSON.stringify(taskList));
  return newTask;
};

module.exports = { readAllTask, createTask };

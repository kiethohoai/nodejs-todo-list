const fs = require("fs");

const readAllTask = () => {
  const buffer = fs.readFileSync("task.json");
  const taskString = buffer.toString();
  const taskJson = JSON.parse(taskString);
  return taskJson;
};

module.exports = { readAllTask };

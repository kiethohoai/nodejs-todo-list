const fs = require("fs");

const readAllTask = () => {
  const buffer = fs.readFileSync("task.json");
  const taskString = buffer.toString();
  const taskJson = JSON.parse(taskString);
  return taskJson;
};

const readDetailTask = (id) => {
  let taskList = readAllTask();
  const curTask = taskList.find((task) => task.id === id);
  return curTask;
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

const updateTask = (id, title, description) => {
  let taskList = readAllTask();
  const index = taskList.findIndex((task) => task.id === id);

  if (index > -1) {
    // todo Update
    const oldTask = taskList[index];
    const newTask = { ...oldTask, title, description };
    taskList[index] = newTask;
    fs.writeFileSync("task.json", JSON.stringify(taskList));
    return newTask;
  } else {
    // todo Notify
    return false;
  }
};

module.exports = { readAllTask, createTask, readDetailTask, updateTask };

const yargs = require("yargs"); //common js
const fs = require("fs"); //file system in nodejs
const {
  readAllTask,
  createTask,
  readDetailTask,
  updateTask,
} = require("./model/task");
const { log } = require("console");

// Create a command: node app/index.js test
yargs.command({
  command: "test",
  handler: () => {
    console.log("test");
  },
});

// todo: CREATE
// node app/index.js create --title="Learning NodeJS"
// node app/index.js create --title="Learning NodeJS" --description="From Zero To Hero"
yargs.command({
  command: "create",
  builder: {
    title: {
      type: "string",
    },
    description: {
      type: "string",
    },
  },
  handler: (agrs) => {
    const { title, description } = agrs;
    const newTask = createTask(title, description);
    console.log("🚀CREATED newTask =", newTask);
  },
});

// todo: READ-ALL
// node app/index.js read-all
yargs.command({
  command: "read-all",
  handler: () => {
    const result = readAllTask();
    console.log("🚀CHECK  result =", result);
    // console.log("read-all");
  },
});

// todo: READ-DETAIL
// node app/index.js read-detail
// node app/index.js read-detail --id="4"
yargs.command({
  command: "read-detail",
  builder: {
    id: {
      type: "string",
    },
  },
  handler: (agrs) => {
    const { id } = agrs;
    const curTask = readDetailTask(id);
    if (curTask) {
      console.log("🚀CHECK  curTask =", curTask);
    } else {
      console.log("🚀NOT FOUND TASK");
    }
  },
});

// todo: UPDATE
// node app/index.js update
// node app/index.js update --id="4" --title="Learning ReactJS Super" --description="React Master From Zero To Hero"
yargs.command({
  command: "update",
  builder: {
    id: {
      type: "string",
    },
    title: {
      type: "string",
    },
    description: {
      type: "string",
    },
  },
  handler: (agrs) => {
    const { id, title, description } = agrs;
    const task = updateTask(id, title, description);
    if (task) {
      console.log("UPDATED-task =", task);
    } else {
      console.log("NOT FOUND!");
    }
  },
});

// todo: DELETE
// node app/index.js delete --id="123"
yargs.command({
  command: "delete",
  builder: {
    id: {
      type: "string",
    },
  },
  handler: (agrs) => {
    const { id } = agrs;
    console.log("delete");
    console.log("🚀CHECK  id =", id);
  },
});

// Save command after create
yargs.parse();

const yargs = require("yargs");

// Create a command: node app/index.js test
yargs.command({
  command: "test",
  handler: () => {
    console.log("test");
  },
});

// todo: CRUD
yargs.command({
  command: "create",
  handler: () => {
    console.log("create");
  },
});

// Save command after create
yargs.parse();

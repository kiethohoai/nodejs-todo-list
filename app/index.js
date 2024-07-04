const yargs = require("yargs");

// Create a command: node app/index.js test
yargs.command({
  command: "test",
  handler: () => {
    console.log("test");
  },
});

// todo: CRUD COMMAND
// node app/index.js create --title="Learning NodeJS"
// node app/index.js create --title="Learning NodeJS" --desc="Fullstack Webs"
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
    const { title, desc } = agrs;
    console.log("🚀CHECK  title =", title);
    console.log("🚀CHECK  desc =", desc);
    console.log(agrs);
  },
});
// node app/index.js read-all
yargs.command({
  command: "read-all",
  handler: () => {
    console.log("read-all");
  },
});
// node app/index.js read-detail
// node app/index.js read-detail --id="123456789"
yargs.command({
  command: "read-detail",
  builder: {
    id: {
      type: "string",
    },
  },
  handler: (agrs) => {
    const { id } = agrs;
    console.log("🚀CHECK  id =", id);
  },
});
// node app/index.js update
// node app/index.js update --id="123" --title="Learning NodeJS" --description="From Zero To Hero"
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
    console.log("UPDATE");
    console.log("🚀CHECK  id, title, description =", id, title, description);
  },
});
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

/* 
node app/index.js create
node app/index.js read-all
node app/index.js read-detail
node app/index.js update
node app/index.js delete
 */

// Save command after create
yargs.parse();

const { createBullBoard } = require("@bull-board/api");
const { BullAdapter } = require("@bull-board/api/bullAdapter");
const Bull = require("bull");
const { MyServerAdapter } = require("./my-server-adapter");

const queue = new Bull();

createBullBoard({
  queues: [new BullAdapter(queue)],
  serverAdapter: new MyServerAdapter(),
});

console.log("Hello world");

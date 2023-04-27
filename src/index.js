const { createBullBoard } = require("@bull-board/api");
const { BullAdapter } = require("@bull-board/api/bullAdapter");
const { ExpressAdapter } = require("@bull-board/express");
const Bull = require("bull");

const serverAdapter = new ExpressAdapter();

const queue = new Bull();

createBullBoard({
  queues: [new BullAdapter(queue)],
  serverAdapter: serverAdapter,
});

console.log("Hello world");

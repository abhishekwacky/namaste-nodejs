const fs = require("fs");

setImmediate(() => console.log("Immediate"));

setTimeout(() => console.log("Timer Expired"), 0);

Promise.resolve("Resolve").then(() => console.log("Resolved"));

fs.readFile("./file.txt", "utf8", () => {
  console.log("File is completed");
});

process.nextTick(() => {
  process.nextTick(() => console.log("inner nextTick"));
  console.log("nextTick");
});

console.log("Last line of the code");

//Last line of the code
//nextTick
//inner nextTick - event loop will move to the phases only when all the nextTick() gets executed
//Resolve
//Timer Expired
//Immediate
//File is completed

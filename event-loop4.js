const fs = require("fs");

setImmediate(() => console.log("Immediate"));

setTimeout(() => console.log("Timer Expired"), 0);

Promise.resolve("Resolve").then(() => console.log);

fs.readFile("./file.txt", "utf8", () => {
  console.log("File is completed");
});

process.nextTick(() => {
  process.nextTick(() => console.log("inner nextTick"));
  console.log("nextTick");
});

console.log("Last line of the code");

const fs = require("fs");

setImmediate(() => console.log("setImmediate"));

setTimeout(() => console.log("Timer expired"), 0);

Promise.resolve("Promise").then(console.log);

fs.readFile("./file.txt", "utf8", () => {
  setTimeout(() => console.log("2nd timer"), 0);

  process.nextTick(() => console.log("2nd nextTick"));

  setImmediate(() => console.log(" 2nd setImmediate"));

  console.log("File Reading CB");
});
process.nextTick(() => console.log("nextTick"));

console.log("Last line of the file.");

// Last line of the file.
// nextTick
// Promise
// Timer expired
// setImmediate
// File Reading CB
// 2nd nextTick - event loop started from poll phase
// 2nd setImmediate - event loop started running from the poll phase so this line gets executed first
// 2nd timer

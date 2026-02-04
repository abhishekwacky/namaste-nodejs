const fs = require("fs");
const a = 100;

setImmediate(() => console.log("setImmediate"));

Promise.resolve().then(() => console.log("Promise Resolved"));

fs.readFile("./file.txt", () => console.log("File reading completed"));

setTimeout(() => console.log("Timer expired"), 0);

process.nextTick(() => console.log("process.nextTick"));

function printA() {
  console.log("a=", a);
}

printA();
console.log("Last line of the code");

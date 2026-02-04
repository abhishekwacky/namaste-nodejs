const fs = require("fs");
const a = 100;

setImmediate(() => console.log("setImmediate"));

fs.readFile("./file.txt", () => console.log("File reading completed"));

setTimeout(() => console.log("Timer expired"), 0);

function printA() {
  console.log("a=", a);
}

printA();
console.log("Last line of the code");

//a=100
//Last line of the code
//Timer expired
//setImmediate
//File reading completed

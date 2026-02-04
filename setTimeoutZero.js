console.log("Hello Wrold");

var a = 234;
var b = 567;

//This callback will only be pushed to call stack in v8 once the call stack is empty.
setTimeout(() => {
  console.log("call me now"); // this will be run as soon as the main thread is available
}, 0);

setTimeout(() => {
  console.log("call me after 3 second");
}, 3000);

function multiplyFn(x, y) {
  const result = a * b;
  return result;
}

var c = multiplyFn(a, b);

console.log("Multiplication result is : ", c);

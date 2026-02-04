const crypto = require("crypto");

console.log("Hello Wrold");

var a = 234;
var b = 567;

//password based key derivation function

//sync
crypto.pbkdf2Sync("password", "salt", 500000, 50, "sha512");
console.log("First key is generated");

//async
crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
  console.log("Second key is generated");
});

function multiplyFn(x, y) {
  const result = a * b;
  return result;
}

var c = multiplyFn(a, b);

console.log("Multiplication result is : ", c);

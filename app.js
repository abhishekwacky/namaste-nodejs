import { calculateSum } from "./sum.js";

const { calculateSum } = require("./calculate/sum");
const { multiply } = require("./calculate/multiply");

const { calculateSum, multiply } = require("./calculate");
const data = require("./data.json");
require("./abhi");

var z = "Wassup";
console.log(data);
let a = 10;
let b = 20;

calculateSum(a, b);
multiply(a, b);
// console.log(x);

const prompt = require("prompt-sync")({ sigint: true });

let num1 = prompt("Enter first number ");
let num2 = prompt("Enter second number ");
let num3 = prompt("Enter third number ");

let value1 = parseFloat(num1 + num2 * num3);
let value2 = parseFloat(num1 % num2 + num3);
let value3 = parseFloat(num3 + num1 / num2);
let value4 = parseFloat(num1 * num2 + num3);

console.log(value1 + "," + value2 + "," + value3 + "," + value4)

let smallest = value1;
let largest = value1;

if (value2 > largest)
    largest = value2;
if (value2 < smallest)
    smallest = value2;

if (value3 > largest)
    largest = value3;
if (value3 < smallest)
    smallest = value3;

if (value4 > largest)
    largest = value4;
if (value4 < smallest)
    smallest = value4;

console.log("Largest = " + largest);
console.log("Smallest = " + smallest);
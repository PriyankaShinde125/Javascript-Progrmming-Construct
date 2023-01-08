const prompt = require("prompt-sync")({ sigint: true });
let number = prompt("Enter number to get harmonic number");
let harmonicNumber = 0;
for (let i = 1; i <= number; i++) {
    harmonicNumber += 1 / i;
}
console.log("Harmonic number is : " + harmonicNumber);